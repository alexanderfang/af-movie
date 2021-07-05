import axios from "axios";
import { base_url, api_key } from "../configs";

export default axios.create({
    baseURL: base_url,
    params: {
        api_key,
        language: "en-US",
    }
});