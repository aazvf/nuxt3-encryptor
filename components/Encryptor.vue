<script setup>
import crypto from "crypto-js";

const props = defineProps({});

const password = ref("");
const message = ref("");
const output = ref("");
const mode = ref("encrypt");

const encrypt = (message, password) => {
    return crypto.AES.encrypt(message, password).toString();
};

const decrypt = (message, password) => {
    return crypto.AES.decrypt(message, password).toString(crypto.enc.Utf8);
};

const submit = () => {
    output.value =
        mode.value === "encrypt"
            ? encrypt(message.value, password.value)
            : decrypt(message.value, password.value);
};

const ucfirst = (str) => str[0].toUpperCase() + str.slice(1);
</script>


<template>
    <div class="max-w-lg w-full">
        <div class="mb-8">
            <img src="/mascot.png" alt="mascot" class="w-48 h-48 rounded-lg shadow-lg mx-auto" />
            <h1 class="text-center text-md mt-3 font-bold text-purple-900">Mr Encryptor</h1>
        </div>
        <div class="rounded-lg border border-gray-200 shadow-md bg-purple-50 mb-5">
            <ul
                class="hidden text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400"
            >
                <li class="w-full">
                    <a
                        v-on:click="mode = 'encrypt'"
                        href="#"
                        class="inline-block p-4 w-full bg-white rounded-l-lg hover:text-gray-700 hover:bg-gray-50"
                        :class="mode === 'encrypt' ? 'bg-gray-100 text-purple-900 font-bold underline' : ''"
                    >Encrypt</a>
                </li>
                <li class="w-full">
                    <a
                        v-on:click="mode = 'decrypt'"
                        href="#"
                        class="inline-block p-4 w-full bg-white rounded-r-lg hover:text-gray-700 hover:bg-gray-50"
                        :class="mode === 'decrypt' ? 'bg-gray-100 text-purple-900 font-bold underline' : ''"
                    >Decrypt</a>
                </li>
            </ul>

            <form class="p-5" v-on:submit.prevent="submit">
                <div class="mb-3">
                    <label
                        for="password"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >Your Password / Private Key</label>
                    <input
                        type="password"
                        id="password"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="•••••••••"
                        v-model="password"
                        required
                    />
                </div>
                <div>
                    <label
                        for="message"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                    >Your Message</label>
                    <textarea
                        v-model="message"
                        id="message"
                        rows="4"
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        :placeholder="'Your message to ' + mode + '...'"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    class="mt-4 w-full text-white bg-purple-700 hover:bg-purple-800 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
                >{{ ucfirst(mode) }}</button>
            </form>
        </div>
        <div
            v-if="output.length > 1"
            class="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
            <h5
                class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white border-b pb-4 mb-6"
            >{{ ucfirst(mode) }}ed message</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 break-words">{{ output }}</p>
        </div>
        <div class="mt-16 mb-8 text-sm text-purple-300 text-center">
            Uses AES from crypto-js, view the
            <a
                href="https://github.com/aazvf/nuxt3-encryptor"
                class="underline"
                target="_blank"
                rel="noopener noreferer"
            >source code on github</a>
        </div>
    </div>
</template>