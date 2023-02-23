<script setup lang="ts">
import { ref, reactive } from 'vue'

import type { UploadFile, UploadFiles } from 'element-plus'

const emit = defineEmits({
    updateTab(idx: number) {
        return idx >= 0 && idx < 4
    }
})

let fileList = ref([])

let state = reactive({url: '', srcList: [] as string[]})

function handleExceed() {
    console.log("file exceed")
}

function handleSuccess(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) {

    // get image url

    if (response.code == 0) {
        state.url = response.data
        state.srcList.push(response.data)

        localStorage.setItem('wallet_id', response.data.wallet_id)
    } else {
    }
}

function hanleError(error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) {
    console.log(uploadFile)
    console.log(uploadFiles)
    console.log(error)
}

function continueAction() {
    emit('updateTab', 1)
}

var uploadHeader = {}

//https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15
//http://172.16.10.26:8080/api/upload
var uploadTarget = 'http://172.16.10.26:8080/api/upload'

</script>

<template>
    <div class="up-container-view">
        <div class="up-desc-view">
            Bitcoin block space is limited, so we may resize, compress, and convert your image file to .webp format. For
            best results, keep your file under 60kB.
        </div>

        <div style="margin-top: 20px;width: 880px;margin: 0 auto;">
            <el-upload class="upload-demo" :limit="1" drag 
            :on-error="hanleError" 
            :on-success="handleSuccess"
            :on-exceed="handleExceed" 
            :auto-upload="true" 
            v-model:file-list="fileList"
            :headers="uploadHeader"
            :action="uploadTarget">
                <el-icon class="el-icon--upload">
                    <img src="../assets/icon_upload_@2x.png" style="width: 48px;height: 48px;" alt="">
                </el-icon>

                <div class="el-upload__text">
                    <div style="color: white;">Drop file here or click to browse</div>
                    <div style="color: white;">File types:JPEG, PNG, SVG, TXT, WEBP</div>
                </div>

                <!-- <template #tip>
                    <div style="padding: 10px;">
                        <el-image style="width: 100px; height: 100px" :src="url" :zoom-rate="1.2"
                            :preview-src-list="srcList" :initial-index="4" fit="cover" />
                    </div>
                </template> -->
            </el-upload>
        </div>

        <div class="continue-view" @click="continueAction">
            Continue
        </div>
    </div>
</template>

<style scoped>
.up-container-view {
    margin: 0 auto;
    background: #1F2335;
    padding-top: 32px;
    padding-bottom: 32px;
    height: 565px;
    border-right: 5px solid #32D9FA;
    border-bottom: 5px solid #32D9FA;
}

.up-desc-view {
    height: 40px;
    font-size: 14px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 40px;
    text-align: center;
}
</style>
