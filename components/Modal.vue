<script setup>
import { onMounted, ref } from "vue";
import { Modal } from "flowbite";

const { status, data, signIn, signOut } = useAuth();
const auth = ref({ status: '', user: data.user });


onMounted(() => {
  console.log(data?.user)
  const $buttonElement = document.querySelector("#button");
  const $modalElement = document.querySelector("#authentication-modal");
  const $closeButton = document.querySelector("#closeButton");
  console.log("AUTH", status.value, status.effect);
    console.log("DATA", data.value);
  const modalOptions = {
    backdropClasses:
      "bg-gray-900 bg-opacity-50 dark:bg-opacity-80 fixed inset-0 z-40",
  };
  if ($modalElement && $buttonElement) {
    const modal = new Modal($modalElement, modalOptions);
    $buttonElement.addEventListener("click", () => modal.toggle());
    $closeButton.addEventListener("click", () => modal.hide());
    
  }
});
</script>

<template>
  <!-- Modal toggle -->
  <button
    v-if="auth.status === 'unauthenticated'"
    data-modal-target="authentication-modal"
    data-modal-toggle="authentication-modal"
    class="text-white text-base md:text-xl bg-primary-600 hover:bg-secondary-500 hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-secondary-300 font-medium rounded-full px-5 py-2.5 text-center block shadow-lg hover:shadow-accent-500/60 transition-all ease-in-out duration-200 active:translate-y-2"
    type="button"
    id="button"
  >
    <span class="leading-5"> check us out </span>
    <Icon name="ic:outline-arrow-forward-ios" class="ml-3 -translate-y-[0.30px]" size="16" />
  </button>

  <!-- Main modal -->
  <div
    id="authentication-modal"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div class="relative w-full max-w-md max-h-full">
      <!-- Modal content -->
      <div class="relative bg-zinc-400 rounded-lg shadow">
        <button
          id="closeButton"
          type="button"
          class="absolute top-3 right-2.5 text-gray-900 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
          data-modal-hide="authentication-modal"
        >
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="px-6 py-6 lg:px-8">
          <h3 class="mb-4 text-xl font-medium text-gray-900 dark:text-white">
            Sign in with an authorized client
          </h3>
          <form class="space-y-5" action="#">
            <button
              type="button"
              @click="signIn('github')"
              class="social-btn bg-[#181616]"
            >
              GitHub <Icon class="ml-3" name="bi:github" />
            </button>
            <button class="social-btn bg-[#4a154b]" disabled>
              Slack <Icon class="ml-3" name="bi:slack" />
            </button>
            <button class="social-btn bg-[#1ed760]" disabled>
              Spotify <Icon class="ml-3" name="bi:spotify" />
            </button>
            <button
              type="button"
              @click="signIn('google')"
              class="social-btn bg-[#db4437]"
            >
              Google <Icon class="ml-3" name="bi:google" />
            </button>
            <button class="social-btn bg-[#1877f2]" disabled>
              Facebook <Icon class="ml-3" name="bi:facebook" />
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
