<script setup lang="ts">
// # introduce usage of "vee-validate" library
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const form = ref({
  email: '',
  password: '',
  subscribe: false,
});

// # usage of TS type schemas
const formErrors = ref({
  email: '',
  password: '',
});

const showPassword = ref(false);
const success = ref(false);
const router = useRouter();

function validateForm() {
  formErrors.value.email = form.value.email ? '' : 'Email is required.';
  formErrors.value.password = form.value.password
    ? ''
    : 'Password is required.';

  return !formErrors.value.email && !formErrors.value.password;
}

function handleSubmit() {
  if (validateForm()) {
    // Simulate successful form submission
    success.value = true;
    setTimeout(() => {
      router.push('/success');
    }, 2000);
  }
}

function togglePasswordVisibility(event: Event) {
  const target = event.target as HTMLInputElement;
  showPassword.value = target.checked;
}

const isFormError = computed(() => {
  return formErrors.value.email || formErrors.value.password;
});
</script>
<template>
  <main class="n-stack-horizontal h-full flex-1">
    <nord-stack class="stack" direction="vertical" align-items="stretch">
      <nord-card padding="l">
        <div slot="header">
          <div class="header-container">
            <svg
              class="mr-2"
              fill="none"
              width="24"
              height="26"
              viewBox="0 0 150 150"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                fill="var(--n-color-accent)"
                height="150"
                rx="33"
                width="150"
              ></rect>
              <g fill="var(--n-color-text-on-accent)">
                <path
                  d="m104.46 121.081c-4.137 0-8.0751-1.591-11.0187-4.535l-.0795-.079c-.0796-.04-.1194-.12-.1989-.16l-41.4886-41.9257 6.7623-6.7623 41.409 40.255.0796.08c.0798.04.1188.119.1988.199 1.154 1.154 2.705 1.83 4.336 1.83 3.381 0 6.563-2.785 6.563-6.245v-58.355c0-3.4607-3.142-6.2451-6.563-6.2451-1.551 0-3.103.6364-4.256 1.7502l-.12.1193-19.5706 17.9798-6.7622-6.7623 19.3719-19.372c.0398-.0397.0796-.1193.1591-.1591 2.9834-2.9833 7.0408-4.6938 11.1778-4.6938 8.592 0 15.991 6.9612 16.11 15.5532v62.0138c-.159 8.592-7.558 15.514-16.11 15.514z"
                ></path>
                <path
                  d="m44.7124 28c4.1369 0 8.0749 1.5911 11.0185 4.5347l.0795.0796c.0796.0397.1194.1193.1989.1591l41.8864 41.5283-6.7623 6.7623-41.8068-39.8577-.0795-.0795c-.0796-.0398-.1194-.1194-.1989-.1989-1.1536-1.1536-2.7049-1.8298-4.3358-1.8298-3.3812 0-6.1657 2.7845-6.1657 6.2452v58.3547c0 3.46 2.7447 6.245 6.1657 6.245 1.5513 0 3.1026-.636 4.2562-1.75l.1193-.12 19.5709-17.9793 6.7623 6.7622-19.372 19.3721c-.0398.04-.0795.119-.1591.159-2.9833 2.983-7.0407 4.694-11.1776 4.694-8.5921 0-15.5931-6.961-15.7124-15.553v-62.0145c.1591-8.5921 7.1601-15.5135 15.7124-15.5135z"
                ></path>
              </g>
            </svg>
            Register for an account
          </div>
        </div>

        <form @submit.prevent="handleSubmit">
          <nord-stack gap="m" direction="vertical" align-items="stretch">
            <nord-input
              v-model="form.email"
              label="Email"
              expand
              required
              hide-required
              name="email"
              autocomplete="email"
              type="email"
              placeholder="Enter your email"
              size="m"
              :error="formErrors?.email"
            />
            <div class="relative">
              <nord-input
                v-model="form.password"
                label="Password"
                expand
                required
                hide-required
                name="password"
                placeholder="Enter your password"
                size="m"
                :type="showPassword ? 'text' : 'password'"
                :error="formErrors?.password"
              />
              <br />
              <nord-toggle
                v-model="showPassword"
                :label="`${showPassword ? 'Hide' : 'Show'} password`"
                size="s"
                @change="togglePasswordVisibility"
              />
            </div>

            <nord-divider />
            <nord-checkbox
              v-model="form.subscribe"
              label="Yes, I'd like to receive occasional updates and announcements about the product"
              class="mt-2"
              size="s"
            />

            <nord-button type="submit" expand variant="primary" size="m">
              {{ 'Submit' }}
            </nord-button>
          </nord-stack>
        </form>
      </nord-card>
    </nord-stack>
  </main>
</template>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
}
</style>
