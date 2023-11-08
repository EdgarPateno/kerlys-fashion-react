<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Insert some data into the products table
        DB::table('products')->insert([
            [
                'product_name' => 'Catelyn',
                'product_image' => 'https://kerlys-fashion-react.netlify.app/images/product-photos/catelyn/catelyn1.webp',
                'product_description' => 'Introducing the exquisite Dracarys Luxury Bag – a true embodiment of elegance and sophistication. Crafted with the utmost precision and attention to detail, this masterpiece redefines luxury in every sense.',
                'product_price' => 600,
                'currency' => 'USD',
            ],
            [
                'product_name' => 'Cersei',
                'product_image' => 'https://kerlys-fashion-react.netlify.app/images/product-photos/cersei/cersei1.webp',
                'product_description' => 'Introducing the exquisite Gwenore Luxury Bag – a true embodiment of elegance and sophistication. Crafted with the utmost precision and attention to detail, this masterpiece redefines luxury in every sense.',
                'product_price' => 600,
                'currency' => 'USD',
            ],
            [
                'product_name' => 'Baelish',
                'product_image' => 'https://kerlys-fashion-react.netlify.app/images/product-photos/baelish/baelish1.webp',
                'product_description' => 'Introducing the exquisite Sansa Luxury Bag – a true embodiment of elegance and sophistication. Crafted with the utmost precision and attention to detail, this masterpiece redefines luxury in every sense.',
                'product_price' => 600,
                'currency' => 'USD',

            ],
            [
                'product_name' => 'Lysa',
                'product_image' => 'https://kerlys-fashion-react.netlify.app/images/product-photos/lysa/lysa1.webp',
                'product_description' => 'Introducing the exquisite Daenarys Luxury Bag – a true embodiment of elegance and sophistication. Crafted with the utmost precision and attention to detail, this masterpiece redefines luxury in every sense.',
                'product_price' => 600,
                'currency' => 'USD',
            ],
            [
                'product_name' => 'Arryn',
                'product_image' => 'https://kerlys-fashion-react.netlify.app/images/product-photos/arryn/arryn1.webp',
                'product-description' => 'Introducing the exquisite Arryn Luxury Bag – a true embodiment of elegance and sophistication. Crafted with the utmost precision and attention to detail, this masterpiece redefines luxury in every sense.',
                'product_price' => 600,
                'currency' => 'USD',
            ],
            [
                'product_name' => 'Osha',
                'product_image' => 'https://kerlys-fashion-react.netlify.app/images/product-photos/osha/osha1.webp',
                'product_description' => 'Introducing the exquisite Osha Luxury Bag – a true embodiment of elegance and sophistication. Crafted with the utmost precision and attention to detail, this masterpiece redefines luxury in every sense.',
                'product_price' => 600,
                'currency' => 'USD',
            ]
        ]);
    }
}
