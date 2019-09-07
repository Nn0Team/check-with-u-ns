<template>
	<Page>
		<ActionBar actionBarHidden="true" />
		<StackLayout orientation="vertical">
			<TextView :autocorrect="false" hint="Login" />
			<TextField hint="Password" text="Password" secure="true" />
		</StackLayout>
	</Page>
</template>

<script src="./login.js">
</script>

<style src="./login.scss"  lang="scss" scoped>
</style>