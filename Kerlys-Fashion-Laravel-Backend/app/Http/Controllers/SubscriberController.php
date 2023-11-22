<?php

namespace App\Http\Controllers;

use App\Models\Subscriber;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

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

        // Check if the email already exists
        $existingSubscriber = Subscriber::where('email_address', $validatedData['email_address'])->first();

        if ($existingSubscriber) {
            // Email already exists, return an error response
            throw ValidationException::withMessages(['email_address' => 'Email already exists']);
        }

        // Create a new subscriber
        $subscriber = Subscriber::create($validatedData);

        return response()->json(['message' => 'Thank you for subscribing!', 'subscriber' => $subscriber], 201);
    }
}
