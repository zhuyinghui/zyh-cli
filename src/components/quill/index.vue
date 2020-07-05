<template>
    <div class="i-quill" :class="classes">
        <div ref="editor" :style="styles"></div>
    </div>
</template>

<script>
import Quill from 'quill'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import axios from '@/config/axios'

export default {
  name: 'i-quill',
  props: {
    value: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number
    },
    minHeight: {
      type: Number
    }
  },
  data () {
    return {
      Quill: null,
      currentValue: '',
      options: {
        theme: 'snow',
        bounds: document.body,
        debug: 'warn',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ size: ['small', false, 'large', 'huge'] }],
            [{ color: [] }, { background: [] }],
            ['blockquote', 'code-block'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            // [{ 'script': 'sub' }, { 'script': 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ align: [] }],
            [{ direction: 'rtl' }],
            // [{ 'font': [] }],
            ['clean'],
            ['link', 'image']
          ]
        },
        placeholder: '内容...',
        readOnly: false
      }
    }
  },
  computed: {
    classes () {
      return [
        {
          'i-quill-no-border': !this.border
        }
      ]
    },
    styles () {
      const style = {}
      if (this.minHeight) {
        style.minHeight = `${this.minHeight}px`
      }
      if (this.height) {
        style.height = `${this.height}px`
      }
      return style
    }
  },
  watch: {
    value: {
      handler (val) {
        if (val !== this.currentValue) {
          this.currentValue = val
          if (this.Quill) {
            this.Quill.pasteHTML(this.value)
          }
        }
      },
      immediate: true
    }
  },
  methods: {
    init () {
      const editor = this.$refs.editor
      // 初始化编辑器
      this.Quill = new Quill(editor, this.options)
      // 默认值
      this.Quill.pasteHTML(this.currentValue)
      // 绑定事件
      this.Quill.on('text-change', (delta, oldDelta, source) => {
        const html = this.$refs.editor.children[0].innerHTML
        const text = this.Quill.getText()
        const quill = this.Quill
        // 更新内部的值
        this.currentValue = html
        // 发出事件 v-model
        this.$emit('input', html)
        // 发出事件
        this.$emit('on-change', { html, text, quill })
      })
      // 将一些 quill 自带的事件传递出去
      this.Quill.on('text-change', (delta, oldDelta, source) => {
        this.$emit('on-text-change', delta, oldDelta, source)
      })
      this.Quill.on('selection-change', (range, oldRange, source) => {
        this.$emit('on-selection-change', range, oldRange, source)
      })
      this.Quill.on('editor-change', (eventName, ...args) => {
        this.$emit('on-editor-change', eventName, ...args)
      })
      //  自定义图片上传
      const toolbar = this.Quill.getModule('toolbar')
      toolbar.addHandler('image', () => {
        var fileInput = toolbar.container.querySelector('input.ql-image[type=file]')
        if (fileInput == null) {
          fileInput = document.createElement('input')
          fileInput.setAttribute('type', 'file')
          fileInput.setAttribute('accept', 'image/png, image/gif, image/jpeg, image/bmp, image/x-icon')
          fileInput.classList.add('ql-image')
          fileInput.addEventListener('change', () => {
            if (fileInput.files != null && fileInput.files[0] != null) {
              this.uploadToServer(fileInput.files[0], (res) => {
                var range = this.Quill.getSelection()
                if (range) {
                  fileInput.value = null
                  //  在当前光标位置插入图片
                  toolbar.quill.insertEmbed(range.index, 'image', res)
                  //  将光标移动到图片后面
                  toolbar.quill.setSelection(range.index + 1)
                }
              })
            }
          })
          toolbar.container.appendChild(fileInput)
        }
        fileInput.click()
      })
    },
    // 上传至服务器
    uploadToServer (file, callback) {
      const formData = new FormData()
      formData.append('file', file)
      axios.post('manager/oss/uploadImagesInData', formData)
        .then(res => {
          callback(res.datas)
        })
    }
  },
  mounted () {
    this.init()
  },
  beforeDestroy () {
    // 在组件销毁后销毁实例
    this.Quill = null
  }
}
</script>
<style lang="scss" scoped>
    .i-quill-no-border{
        .ql-toolbar.ql-snow{
            border: none;
            border-bottom: 1px solid #e8eaec;
        }
        .ql-container.ql-snow{
            border: none;
        }
    }
</style>
