import { UserModel } from "../postgres/postgres.js";
import axios from "axios"


export const getAllData = async (req, res) => {
    try {
        const data = await UserModel.findAll();
        if (data.length == 0) {
            return res.status(200).json({ "error": "No data in database" });
        }
        return res.status(200).json(data);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "internal server error" });
    }
}

async function fetchData() {
    const url = 'https://api.wazirx.com/api/v2/tickers';

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }
}


export const addData = async (req, res) => {
    try {
        const data = await fetchData();
        const top10 = Object.values(data).slice(0, 10);
        for (const item of top10) {
            await UserModel.upsert({
                name: item.name,
                last: item.last,
                buy: item.buy,
                sell: item.sell,
                volume: item.volume,
                base_unit: item.base_unit
            });
        }

        return res.status(200).json({ message: "Top 10 cryptocurrencies inserted or updated successfully" });
    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({ "error": "Internal server error" });
    }
};
