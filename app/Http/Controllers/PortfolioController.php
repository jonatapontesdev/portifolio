<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index()
    {
        return view('pages.portfolio');
    }

    public function upload(Request $request)
    {
        $validated = $request->validate([
            'project_name' => 'required|string|max:255',
            'description' => 'required|string|max:1000',
            'preview' => 'required|file|mimes:jpeg,png,jpg,mp4,webm|max:51200',
        ]);

        // Armazenar arquivo
        if ($request->hasFile('preview')) {
            $file = $request->file('preview');
            $path = $file->store('projects', 'public');
            $validated['preview_path'] = $path;
        }

        // Salvar no banco de dados (quando implementado)
        // Project::create($validated);

        return redirect()->back()->with('success', 'Projeto enviado com sucesso!');
    }
}
