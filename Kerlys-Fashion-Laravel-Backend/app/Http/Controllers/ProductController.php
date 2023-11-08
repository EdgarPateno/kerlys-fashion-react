<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        $productData = $request->validate([
            'product_name' => 'required',
            'product_image' => 'required',
            'product_description' => 'required',
            'product_price' => 'required|numeric',
        ]);

        $product = Product::create($productData);

        return response()->json($product, 201);
    }
}
