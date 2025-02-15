<script lang="ts">
	import axios from 'axios';
	import { onMount } from 'svelte';

	let email = $state('');
	let password = $state('');

	const handleSubmit = async () => {
		axios
			.post('http://172.28.26.42:3000/api/v1/auth/email/login', {
				email: 'admin@example.com',
				password: 'secret'
			})
			.then(function (response) {
				console.log(response);
			})
			.catch(function (error) {
				console.log(error);
			});
	};

	onMount(() => {
		// @ts-ignore
		window.YaAuthSuggest.init(
			{
				client_id: '8d01cc9c1315452dacd673c39069d38f',
				response_type: 'token',
				redirect_uri: 'https://7xl2-z0fk-tke9.gw-1a.dockhost.net/app/yandex-auth'
			},
			'https://7xl2-z0fk-tke9.gw-1a.dockhost.net',
			{
				view: 'button',
				parentId: 'buttonContainerId',
				buttonSize: 'm',
				buttonView: 'main',
				buttonTheme: 'light',
				buttonBorderRadius: '0',
				buttonIcon: 'ya'
			}
		)
			.then(({ handler }) => handler())
			.then((data) => console.log('Сообщение с токеном', data))
			.catch((error) => console.log('Обработка ошибки', error));
	});
</script>

<!-- <form onsubmit={handleSubmit}>
	<input bind:value={email} name="email" placeholder="email" type="email" />
	<input bind:value={password} name="password" placeholder="password" type="password" />
	<button type="submit">Submit</button>
</form> -->

<svelte:head>
	<script
		src="https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js"
	></script>
</svelte:head>

<div class="relative z-0" id="buttonContainerId"></div>
