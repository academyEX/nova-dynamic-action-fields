<template>
  <ConfirmActionModal
      v-if="dynamicAction"
      v-bind="{ working, resourceName, selectedResources, errors }"
      :action="dynamicAction"
      @confirm="$emit('confirm')"
      @close="$emit('close')"
  />
  <Modal
      v-else
      tabindex="-1"
      role="dialog"
      @click.native="$emit('close')"
  >
    <div
        class="flex items-center justify-center z-50 p-6"
        style="min-height: 150px"
    >
      <Loader class="text-60" />
    </div>
  </Modal>
</template>

<script>
function fetchDynamicActionFields(url, param) {
  return window.Nova.request().get(url, param)
}
export default {
  name: 'dynamic-action-field-modal',

  props: {
    working: Boolean,
    resourceName: { type: String, required: true },
    action: { type: Object, required: true },
    selectedResources: { type: [Array, String], required: true },
    errors: { type: Object, required: true },
  },

  data() {
    return {
      dynamicAction: null,
    };
  },

  methods: {
    loadAction() {
      this.dynamicAction = null;
      fetchDynamicActionFields(`/nova-vendor/dynamic-action-fields/actions/${this.resourceName}/dynamic-fields`, {
        params: {
          resources: Array.isArray(this.selectedResources) ? this.selectedResources.join(',') : this.selectedResources,
          action: this.action.uriKey,
        },
      }).then((resp) => {
        this.dynamicAction = resp.data;
        this.action.fields = this.dynamicAction.fields;
      });
    },
  },

  mounted() {
    this.loadAction();
  },

  watch: {
    action() {
      this.loadAction();
    },
    resourceName() {
      this.loadAction();
    },
    selectedResources() {
      this.loadAction();
    },
  },
}
</script>
