import { notify } from '@kyvg/vue3-notification'

const DURATION = 15000

const errorNotification = ({ title, text }) => {
	notify({
		title,
		text,
		duration: DURATION,
		type: 'error',
	})
}

const successNotification = (title) => {
	notify({
		title,
		duration: DURATION,
		type: 'success',
	})
}

const warnNotification = (title) => {
	notify({
		title,
		duration: DURATION,
		type: 'warn',
	})
}

export { errorNotification, successNotification, warnNotification }
