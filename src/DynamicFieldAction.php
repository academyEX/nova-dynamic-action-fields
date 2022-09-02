<?php

namespace TuneZilla\DynamicActionFields;

use Illuminate\Support\Collection;
use Laravel\Nova\Http\Requests\ActionRequest;
use Laravel\Nova\Http\Requests\NovaRequest;

trait DynamicFieldAction
{
    final public function component()
    {
        return 'dynamic-action-field-modal';
    }

    /**
     * @param ActionRequest $request
     * @return array
     */
    final public function fields(NovaRequest $request)
    {
        $models = [];
        if ($request->has('resources')) {
            $request->chunks(100, function ($chunkedModels) use (&$models) {
                /** @var \Illuminate\Database\Eloquent\Collection $chunkedModels */
                $models = array_merge($models, $chunkedModels->all());
            });
        }

        return $this->fieldsForModels(collect($models));
    }

    abstract public function fieldsForModels(Collection $models): array;
}
