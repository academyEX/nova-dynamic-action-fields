<?php

namespace TuneZilla\DynamicActionFields;

use Illuminate\Support\Collection;
use Laravel\Nova\Http\Requests\ActionRequest;
use Laravel\Nova\Http\Requests\NovaRequest;
use Laravel\Nova\Nova;

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
        $actionRequest = $this->getActionRequest($request);
        if ($actionRequest->has('resources')) {
            $actionRequest->chunks(100, function ($chunkedModels) use (&$models) {
                /** @var \Illuminate\Database\Eloquent\Collection $chunkedModels */
                $models = array_merge($models, $chunkedModels->all());
            });
        }

        return $this->fieldsForModels(collect($models));
    }

    protected function getActionRequest(NovaRequest $request)
    {
        if ($request instanceof ActionRequest) {
            return $request;
        }
        $actionRequest = app(ActionRequest::class);
        $resources = $actionRequest->resources;
        if (is_array($resources)) {
            $actionRequest->query->set('resources', implode(',', $resources));
        }

        return $actionRequest;
    }

    abstract public function fieldsForModels(Collection $models): array;
}
