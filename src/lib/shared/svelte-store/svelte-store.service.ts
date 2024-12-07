type Subscriber<T> = (value: T) => void;
type Unsubscribe = () => void;

export class SvelteStore<T> {
	private _value: T;
	private subscribers: Subscriber<T>[] = [];

	constructor(initialValue: T) {
		this._value = initialValue;
	}

	subscribe(subscription: Subscriber<T>): Unsubscribe {
		this.subscribers.push(subscription);
		subscription(this._value);

		return () => {
			this.subscribers = this.subscribers.filter((sub) => sub !== subscription);
		};
	}

	protected get value(): T {
		return this._value;
	}

	protected set value(newValue: T) {
		this._value = newValue;
		this.notifySubscribers();
	}

	private notifySubscribers(): void {
		this.subscribers.forEach((subscriber) => subscriber(this._value));
	}
}
