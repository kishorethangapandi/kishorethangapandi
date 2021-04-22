import { Injectable } from '@angular/core';
import { IProduct } from '../model/product.model';

@Injectable()
export class ProductService {
    products: IProduct[] = [];

    constructor(
    ) {
        this.products = [
            {
                id: 1,
                name: "LED watch",
                description: "Resh Digital led Watch Black Colour Mens Watch Womens Watch Boys Watch Girls Watch Kids Watch",
                price: 1000,
                information: "If this product is sold by Amazon, please review the manufacturer’s website for warranty information. If this product is sold by another party, please contact the seller directly for warranty information for this product. You may also be able to find warranty information on the manufacturer’s website."
            },
            {
                id: 2,
                name: "Android Smart LED TV",
                description: "TCL 126 cm (50 inches) 4K Ultra HD Certified Android Smart LED TV 50P615 (Black) (2020 Model) | With Dolby Audio",
                price: 45000,
                information: "Powered by TCL AI technology Android P OS, the all new 50 Inch P615 4K UHD TV gives you cutting edge intelligent functions and a range of entertainment options with certified Netflix and YouTube. The HDR features provides you HDR10 standard with more clarity and picture detail. Enjoy pure official Google services like voice search, Google store, Chromecast, Google movie, Google music on your TCL P615 TV (these services can be enjoyed only through Google certified Android TV)"
            },
            {
                id: 3,
                name: "OnePlus 8 Pro (Onyx Black 8GB RAM+128GB Storage)",
                description: "48MP rear camera with 4k video at 30/60 fps, 1080p video at 30/60 fps, super slow motion: 720p video at 480 fps, 1080p video at 240fps, time-lapse: 1080p 30fps, 4k 30fps, cine aspect ratio video recording, video hdr, cat&dog face detect & focus, ultrashot hdr, nightscape, super micro, portrait, pro mode, panorama, ai scene detection, raw image, audio zoom, audio 3d, infrared photography camera | 16MP front camera 17.22 centimeters (6.78-inch) 120Hz fluid display with 3168 x 1440 pixels resolution, 513 ppi pixel density and vibrant color effect color supportMemory, Storage & SIM: 8GB RAM | 128GB internal memory | Dual SIM (nano+nano) dual-standby (5G+5G)",
                price: 35000,
                information: "Oxygen OS based on Android v10 operating system with 2.86GHz of clock speed with Qualcomm Snapdragon 865, powered by Kryo 585 CPU octa core processor, Adreno 650 4510mAH lithium-ion battery 1 year manufacturer warranty for device and 6 months manufacturer warranty for in-box accessories including batteries from the date of purchase"
            },
            {
                id: 4,
                name: "Sony headset",
                description: "Sony WI-C200 Wireless In-Ear Headphones with 15 Hours Battery Life, Quick Charge, Magnetic Earbuds for Tangle Free Carrying,Metallic Finish, Bluetooth ver 5.0, Headset with mic for phone calls (Black)",
                price: 3000,
                information: "Usage : Wireless Headphones for casual and daily usage, Battery Life : Up to 15 Hours of battery life. Quick Charge : Quick charge in 10mins for 60mins playback, For any product related queries contact_us on: [1800 103 7799], Headphones with Mic : In-Built Mic for Hands free calling with HD voice, Driver Unit : 9mm driver unit offers clear sound quality, Tangle Free Design : Magnetic housing and Tangle free cable for easy listening, Light Weight : Portable headphones with ultra lightweight at 15g design"
            },
            {
                id: 5,
                name: "Pronto Trinity 25 Ltrs Black Laptop Backpack (8808 - BL)",
                description: "Capacity: 25 liters; Weight: 480 grams; Dimensions: 19 cms x 33 cms x 45 cms (LxWxH), Number of compartments: 2, Laptop Compatibility: Yes, Laptop Size: 38 cms, Warranty type: Manufacturer and seller; 18 months international warranty and valid for 18 months from the original date of purchase ,Outer Material: Polyester, Color: Black",
                price: 1500,
                information: "Product Dimensions : 19 x 33 x 45 cm; 480 Grams, Date First Available : 27 August 2016, Manufacturer : Pronto, ASIN : B01L3I1DPI, Item model number : 8808 - BL, Country of Origin : India, Manufacturer : Pronto, Item Weight : 480 g, Item Dimensions LxWxH : 19 x 33 x 45 Centimeters"
            }
        ];
    }

    get productList(): IProduct[] {
        return this.products;
    }

    createProduct(product: IProduct) {
        if (product) {
            this.products.push(product);
        }
        return this.products;
    }

    updateProduct(product: IProduct) {
        if (product) {
            let index: number;
            index = this.products.findIndex(item => item.id === product.id);
            if (index !== -1) {
                this.products[index] = product;
            }
        }
        return this.products;
    }
}