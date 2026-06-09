// import "dotenv/config";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: 'dqyfoxlko',
    api_key: "421368117838741",
    api_secret: "hE3Di94470l3l27dLgsUKD-lRuE"
});

async function run() {
    const result = await cloudinary.api.resources({
        type: "upload",
        max_results: 100
    });

    console.log("TOTAL:", result.resources.length);

    console.log(
        result.resources.map(r => ({
            public_id: r.public_id,
            asset_folder: r.asset_folder
        }))
    );
}

run();