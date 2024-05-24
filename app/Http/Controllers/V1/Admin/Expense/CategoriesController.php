<?php

namespace InvoiceShelf\Http\Controllers\V1\Admin\Expense;

use Illuminate\Http\Request;
use InvoiceShelf\Http\Controllers\Controller;
use InvoiceShelf\Http\Requests\CategoryRequest;
use InvoiceShelf\Http\Resources\CategoryResource;
use InvoiceShelf\Models\Category;

class CategoriesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $this->authorize('viewAny', Category::class);

        $limit = $request->has('limit') ? $request->limit : 10;

        $categories = Category::applyFilters($request->all())
            ->whereCompany()
            ->orderBy('parent_path')
            ->latest()
            ->paginateData($limit);

        return CategoryResource::collection($categories);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CategoryRequest $request)
    {
        $this->authorize('create', Category::class);

        $category = Category::create($request->getCategoryPayload());
        $parentIds = $category->allParentIds();
        $parentNames = $category->allParentNames();
        array_push($parentIds, $category->id);
        array_push($parentNames, $category->name);
        $category->parent_path = implode('/', $parentIds);
        $category->complete_name = implode(' / ', $parentNames);
        $category->save();
        return new CategoryResource($category);
    }

    /**
     * Display the specified resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function show(Category $category)
    {
        $this->authorize('view', $category);

        return new CategoryResource($category);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \InvoiceShelf\Models\Category  $Category
     * @return \Illuminate\Http\Response
     */
    public function update(CategoryRequest $request, Category $category)
    {
        $this->authorize('update', $category);

        $category->update($request->getCategoryPayload());

        return new CategoryResource($category);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \InvoiceShelf\ExpensesCategory  $category
     * @return \Illuminate\Http\Response
     */
    public function destroy(Category $category)
    {
        $this->authorize('delete', $category);

        // if ($category->expenses() && $category->expenses()->count() > 0) {
        //     return respondJson('expense_attached', 'Expense Attached');
        // }

        try{
            $category->delete();
        }catch (\Exception $e){
            return respondJson('expense_attached', 'Expense Attached');
        }

        return response()->json([
            'success' => true,
        ]);
    }
}
