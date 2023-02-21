<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage } from "element-plus";

let state = reactive({ input: '', isMintAble: false, isMinting: false })

function mintAction() {
    if (state.isMintAble) {
        state.isMinting = true
    } else {
        // no bale to mint
        ElMessage({
            message: "Address is needed.",
            type: "warning",
        });
        return
    }
}

function inputChange(value: string | number) {
    if (value) {
        state.isMintAble = true
    } else {
        state.isMintAble = false
    }
}
</script>

<template>
    <div class="addr-container-view">
        <div class="addr-content-view">
            <img src="../assets/icon_success@2x.png" alt="" style="width: 80px;height: 80px;margin-top: 64px;">
            <div class="state-view">NFT Mint Finished</div>

            <div class="m-content-view">
                <div class="m-title">
                    Minting to
                </div>
                <div class="m-content">
                    tb1pqts6pxrhr2d8tle9gOt8nnrptae8h47pmmmwpn4as3a4uf2602q44rh95
                </div>

                <div class="m-title">
                    Inscription id
                </div>
                <div class="m-content">
                    333e66bad68a967bd98d16dbc03d1d055050fbb856f1d00ca19b2deObf9a96e90
                </div>

                <div class="m-title">
                    Inscription id
                </div>
                <div class="m-content">
                    333e66bad68a967bd98d16dbc03d1d055050fbb856f1d00ca19b2deObf9a96e90
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.addr-container-view {
    margin: 0 auto;
    width: 1200px;
    background: #1F2335;
    padding-top: 32px;
    height: 565px;
    border-right: 5px solid #32D9FA;
    border-bottom: 5px solid #32D9FA;
}

.addr-content-view {
    margin: 0 auto;
    width: 880px;
    text-align: center;
}

.m-content-view {
    width: 848px;
    padding-top: 16px;
    padding-left: 16px;
    padding-right: 16px;
    text-align: left;
    width: 880px;
    height: 187px;
    background: #161828;
    margin-top: 90px;
}

.state-view {
    height: 22px;
    font-size: 16px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 22px;
}

.m-title {
    height: 20px;
    font-size: 14px;
    font-weight: 600;
    color: #FFFFFF;
    line-height: 20px;
    margin-top: 16px;
}

.m-content {
    height: 17px;
    font-size: 12px;
    font-weight: 400;
    color: #FFFFFF;
    line-height: 17px;
}
</style>
