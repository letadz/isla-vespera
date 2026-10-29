<template>
  <div class="bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-sm">
    <div
      v-if="submitted"
      class="text-center py-8 space-y-4 animate__animated animate__fadeIn"
    >
      <div
        class="w-14 h-14 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/30"
      >
        <Icon
          name="CheckCircle2"
          :size="32"
        />
      </div>

      <h3 class="text-xl font-heading font-semibold text-font-text">
        Message Received
      </h3>

      <p class="text-xs text-font-muted max-w-sm mx-auto leading-relaxed">
        Thank you,
        <strong>{{ form.name }}</strong>
        ! This inquiry connects directly to our reservations desk.
      </p>

      <BaseButton
        variant="outline"
        size="sm"
        @click="resetForm"
      >
        Send Another Message
      </BaseButton>
    </div>

    <form
      v-else
      class="space-y-4"
      @submit.prevent="handleSubmit"
    >
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <BaseInput
          id="contact-name"
          v-model="form.name"
          label="Your Full Name"
          placeholder="e.g. Liam Walker"
          :error="errors.name"
          required
        />

        <BaseInput
          id="contact-email"
          v-model="form.email"
          type="email"
          label="Email Address"
          placeholder="liam.walker@example.com"
          :error="errors.email"
          required
        />
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <BaseInput
          id="contact-phone"
          v-model="form.phone"
          type="tel"
          label="Contact Number"
          placeholder="+63 917 000 0000"
        />

        <BaseInput
          id="contact-subject"
          v-model="form.subject"
          label="Subject / Topic"
          placeholder="Room reservation inquiry, private events..."
          :error="errors.subject"
          required
        />
      </div>

      <div>
        <label
          class="block text-xs font-semibold uppercase tracking-wider text-font-muted mb-1.5"
        >
          Your Message
          <span class="text-secondary font-bold">*</span>
        </label>
        <textarea
          v-model="form.message"
          rows="4"
          placeholder="Tell us about your upcoming visit, preferred dates, questions about airport transfers, or custom requests..."
          class="w-full bg-surface-muted/50 border border-border rounded-button p-3.5 text-sm text-font-text focus:outline-hidden focus:border-secondary transition-colors"
          required
        />
        <p
          v-if="errors.message"
          class="text-xs text-rose-600 mt-1 font-medium"
        >
          {{ errors.message }}
        </p>
      </div>

      <BaseButton
        type="submit"
        variant="gold"
        size="lg"
        block
        :loading="loading"
      >
        Submit Message
      </BaseButton>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import BaseInput from '~/components/common/BaseInput.vue';
import BaseButton from '~/components/common/BaseButton.vue';
import Icon from '~/components/ui/Icon.vue';

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
});

const errors = reactive<Record<string, string>>({});
const loading = ref(false);
const submitted = ref(false);

const validate = () => {
  Object.keys(errors).forEach((k) => delete errors[k]);

  if (!form.name.trim()) errors.name = 'Please enter your name.';
  if (!form.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please provide a valid email address.';
  }
  if (!form.subject.trim()) errors.subject = 'Please specify a subject.';
  if (!form.message.trim()) errors.message = 'Please write your message.';

  return Object.keys(errors).length === 0;
};

const handleSubmit = () => {
  if (!validate()) return;
  loading.value = true;

  setTimeout(() => {
    loading.value = false;
    submitted.value = true;
  }, 600);
};

const resetForm = () => {
  form.name = '';
  form.email = '';
  form.phone = '';
  form.subject = '';
  form.message = '';
  submitted.value = false;
};
</script>
