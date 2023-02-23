import { Apis } from "../router/domain";
import axios from "axios";

import { ElMessage } from "element-plus";

export default {
    async queryFeeAction() {
        if (localStorage.getItem("user_info")) {
            return JSON.parse(localStorage.getItem("user_info")!)
        }

        let ret = await axios.post(Apis.queryFee, {
            'wallet_id': localStorage.getItem('wallet_id')
        })

        if (ret.data.code == 0) {
            let data = ret.data.data;

            localStorage.setItem("user_info", data)

            return JSON.parse(data)
        } else {
            ElMessage.error(ret.data.msg)
            return
        }
    },

    async mintAction(mintWallet: string) {
        let ret = await axios.post(Apis.mint, {
            'wallet_id': localStorage.getItem('wallet_id'),
            'mint_wallet': mintWallet,
        })

        if (ret.data.code == 0) {
            let data = ret.data.data;
            return JSON.parse(data)
        } else {
            ElMessage.error(ret.data.msg)
            return
        }
    }
}