import { useRouter } from "next/router";
import type { ChangeEvent, FC } from "react";
import { useState } from "react";

import styles from "./contact-form.module.css";

// intentionally naive
const emailRegex = /^[^@]+@[^@]+$/;

const validators = {
	name: (value: string) => value.length > 1,
	email: (value: string) => emailRegex.test(value),
	message: (value: string) => value.length > 1
};

export const ContactForm: FC = () => {
	const router = useRouter();

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isValid, setIsValid] = useState(false);

	const actions = {
		name: setName,
		email: setEmail,
		message: setMessage
	};

	const updateField =
		(field: "name" | "email" | "message") =>
		(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { value } = event.target;
			actions[field](value);

			setIsValid(
				validators.name(name) &&
					validators.email(email) &&
					validators.message(message)
			);
		};

	return (
		<section>
			{router.query.success != null && (
				<p className={styles.successMessage}>
					Your message was sent successfully &mdash; I’ll keep my eyes open!
					Thank you.
				</p>
			)}

			<form
				className={styles.contactForm}
				name="contact"
				action="/contact?success=true"
				method="POST"
				data-netlify="true"
			>
				<input type="hidden" name="form-name" value="contact" />
				<p>
					<label htmlFor="name">Name:</label>
					<br />
					<input
						type="text"
						name="name"
						id="name"
						value={name}
						required
						onChange={updateField("name")}
					/>
				</p>

				<p>
					<label htmlFor="email">Email:</label>
					<br />
					<input
						type="email"
						name="email"
						id="email"
						value={email}
						required
						onChange={updateField("email")}
					/>
				</p>

				<p>
					<label htmlFor="message">Message:</label>
					<br />
					<textarea
						name="message"
						id="message"
						value={message}
						required
						onChange={updateField("message")}
					/>
				</p>

				<p>
					<button type="submit" disabled={!isValid}>
						Send
					</button>
				</p>
			</form>
		</section>
	);
};
