<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ForceHttps
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next)
    {
        // Vérifiez si la requête n'est pas déjà en HTTPS
        if (!$request->isSecure()) {
            // Redirigez vers la même URL mais en HTTPS
            return redirect()->secure($request->getRequestUri());
        }

        return $next($request);
    }
}
