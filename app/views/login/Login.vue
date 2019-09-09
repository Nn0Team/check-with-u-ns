<template>
	<Page actionBarHidden="true">
		<FlexboxLayout
			flexDirection="column"
			justifyContent="space-between"
			flexWrap="wrap"
			class="left-gradient"
		>
			<GridLayout rows="auto, auto,*, auto, *" columns="*, auto, auto, auto, auto, auto">
				<StackLayout row="0" col="0" width="250" height="250">
					<Image stretch="aspectFit" src="res://checkwithulogo" />
				</StackLayout>
				<StackLayout row="1" col="0" horizontalAlignment="center">
					<Label
						text="CheckWith U"
						textWrap="true"
						class="text-2xl font-mono rounded-full input-rounded"
					/>
				</StackLayout>
				<StackLayout row="2" col="0" orientation="vertical" order="2">
					<TextField
						hint="email"
						keyboardType="email"
						v-model="userName"
						class="border border-red-500 input-rounded"
					/>
					<TextField
						hint="password"
						v-model="password"
						secure="true"
						class="border border-red-500 input-rounded"
					/>
				</StackLayout>
				<StackLayout row="3" col="0" orientation="vertical" marginBottom="10">
					<Button
						text="Sign In"
						class="bg-red-400 text-white font-bold py-2 px-4 rounded-full"
						@tap="submitLogin"
					/>
					<Label text="or" textWrap="true" class="text-xl font-bold text-center" />
					<Label
						horizontalAlignment="center"
						text=" Login with another way"
						class="bg-transparent border-none border-0 font-semibold rounded-full"
					/>
				</StackLayout>
				<DockLayout
					stretchLastChild="true"
					horizontalAlignment="center"
					verticalAlignment="center"
					row="4"
					col="0"
				>
					<Label text="Does not have an account?" textWrap="true" paddingRight="5" />
					<Label
						text="Sign-Up"
						class="bg-transparent border-none border-0 text-base text-yellow-500 font-semibold rounded-full"
					/>
				</DockLayout>
			</GridLayout>
		</FlexboxLayout>
	</Page>
</template>

<script src="./login.js"/>
<style src="./login.scss" lang="scss" scoped />
