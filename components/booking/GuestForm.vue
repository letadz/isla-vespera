<template>
  <div
    class="bg-surface border border-border rounded-2xl p-6 shadow-sm space-y-6"
  >
    <div class="border-b border-border pb-4">
      <h3 class="text-xl font-heading font-semibold text-font-text">
        Guest & Contact Information
      </h3>
      <p class="text-xs text-font-muted mt-1">
        Please enter the lead guest's details so our reservations team can reach
        you.
      </p>
    </div>

    <form
      class="space-y-4"
      @submit.prevent
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- First Name -->
        <BaseInput
          id="guest-first-name"
          v-model="localInfo.firstName"
          label="First Name"
          placeholder="e.g. Maria"
          :error="errors.firstName"
          required
          @update:model-value="handleUpdate"
        />

        <!-- Last Name -->
        <BaseInput
          id="guest-last-name"
          v-model="localInfo.lastName"
          label="Last Name"
          placeholder="e.g. Santos"
          :error="errors.lastName"
          required
          @update:model-value="handleUpdate"
        />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- Email -->
        <BaseInput
          id="guest-email"
          v-model="localInfo.email"
          type="email"
          label="Email Address"
          placeholder="maria.santos@example.com"
          :error="errors.email"
          hint="Booking request confirmation will be sent here"
          required
          @update:model-value="handleUpdate"
        />

        <!-- Phone -->
        <BaseInput
          id="guest-phone"
          v-model="localInfo.phone"
          type="tel"
          label="Phone / Mobile Number"
          placeholder="+63 917 123 4567"
          :error="errors.phone"
          hint="For concierge messaging & arrival coordination"
          required
          @update:model-value="handleUpdate"
        />
      </div>

      <!-- Estimated Arrival Time -->
      <div>
        <label
          class="block text-xs font-semibold uppercase tracking-wider text-font-muted mb-1.5"
        >
          Estimated Time of Arrival
        </label>
        <select
          v-model="localInfo.estimatedArrival"
          class="w-full bg-surface-muted/50 border border-border rounded-button py-2.5 px-3.5 text-sm text-font-text focus:outline-hidden focus:border-secondary cursor-pointer"
          @change="handleUpdate"
        >
          <option value="12:00">Around 12:00 PM (Early arrival inquiry)</option>
          <option value="14:00">14:00 - 16:00 PM (Standard check-in)</option>
          <option value="17:00">17:00 - 19:00 PM (Sunset arrival)</option>
          <option value="20:00">
            After 20:00 PM (Late night flight arrival)
          </option>
        </select>
      </div>

      <!-- Special Requests -->
      <div>
        <label
          class="block text-xs font-semibold uppercase tracking-wider text-font-muted mb-1.5"
        >
          Special Requests & Notes (Optional)
        </label>
        <textarea
          v-model="localInfo.specialRequests"
          rows="3"
          placeholder="Dietary requirements, anniversary celebration, high floor preference, airport transfer assistance..."
          class="w-full bg-surface-muted/50 border border-border rounded-button p-3 text-sm text-font-text focus:outline-hidden focus:border-secondary transition-colors placeholder:text-font-muted/60"
          @input="handleUpdate"
        />
        <p class="text-[11px] text-font-muted mt-1">
          Special requests cannot be guaranteed until acknowledged by resort
          staff, but we will make every effort to accommodate your needs.
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';
import type { GuestInformation } from '~/types';
import BaseInput from '~/components/common/BaseInput.vue';

const props = defineProps<{
  modelValue: GuestInformation;
  errors: Record<string, string>;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', val: GuestInformation): void;
}>();

const localInfo = reactive<GuestInformation>({
  firstName: props.modelValue.firstName || '',
  lastName: props.modelValue.lastName || '',
  email: props.modelValue.email || '',
  phone: props.modelValue.phone || '',
  specialRequests: props.modelValue.specialRequests || '',
  estimatedArrival: props.modelValue.estimatedArrival || '14:00',
});

watch(
  () => props.modelValue,
  (val) => {
    Object.assign(localInfo, val);
  },
  { deep: true },
);

const handleUpdate = () => {
  emit('update:modelValue', { ...localInfo });
};
</script>
