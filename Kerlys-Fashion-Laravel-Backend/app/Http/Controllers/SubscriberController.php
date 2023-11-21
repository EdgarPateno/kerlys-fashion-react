<?php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;

class SubscriberController extends Controller
{
    public function subscribe(Request $request)
    {
        // Validate the request
        $validatedData = $request->validate([
            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email_address' => 'required|email',
        ]);

        // Create a new subscriber
        $subscriber = Subscriber::create($validatedData);

        return response()->json(['message' => 'Subscriber added successfully', 'subscriber' => $subscriber], 201);
    }
}
