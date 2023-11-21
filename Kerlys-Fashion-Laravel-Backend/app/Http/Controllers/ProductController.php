<?php

namespace App\Http\Controllers;

use App\Http\Resources\ProductResource;
use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // public function store(Request $request)
    // {
    //     $productData = $request->validate([
    //         'product_name' => 'required',
    //         'product_image' => 'required',
    //         'product_description' => 'required',
    //         'product_price' => 'required|numeric',
    //     ]);

    //     $product = Product::create($productData);

    //     return response()->json($product, 201);
    // }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        try {
            $products = Product::orderBy('id','desc')->get();
            $response = [
                "code" => 200,
                "message" => "Successfully retrieved product list!",
                'products' => ProductResource::collection($products)
            ];

        } catch (\Throwable $th) {
            $response = [
                "code" => 500,
                "message" => "Error Retrieving product list!",
            ];
        }
        return $response;
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        try {
            $input = $request->all();
            $product = Product::create($input);
            $response = [
                "code" => 200,
                "message" => "Successfully created product list!",
                'product' => new ProductResource($product)
            ];
        } catch (\Throwable $th) {
            $response = [
                "code" => 500,
                "message" => "Error Retrieving product list!",
                "error" => $th->getMessage(),
            ];
        }
        return $response;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        try {
            $product = Product::findOrFail($id);
            $response = [
                "code" => 200,
                "message" => "Successfully retrieved product by id!",
                'product' => new ProductResource($product)
            ];
        } catch (\Throwable $th) {
            $response = [
                "code" => 500,
                "message" => "Error retrieving product by id!",
                "error" => $th->getMessage(),
            ];
         }
        return $response;
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
        try {
            $input = $request->all();
            $product = Product::findOrFail($id);
            $product->update($input);
    
            $response = [
                "code" => 200,
                "message" => "Successfully update product by id!",
                'product' => new ProductResource($product)
            ];
        } catch (\Throwable $th) {
            $response = [
                "code" => 500,
                "message" => "Error updating product by id!",
                "error" => $th->getMessage(),
            ];
        }
    
        return $response;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
        try {
            $product = Product::findOrFail($id);
            $product->delete();
            $response = [
                "code" => 200,
                "message" => "Successfully update deleted by id!",
                'product' => new ProductResource($product)
            ];
        } catch (\Throwable $th) {
            $response = [
                "code" => 500,
                "message" => "Error deleting product by id!",
                "error" => $th->getMessage(),
            ];
        }
   
        return $response;
    }
}
