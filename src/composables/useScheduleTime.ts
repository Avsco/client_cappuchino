import { ref } from "vue";
import { DAYS } from "../enums/days";
import { HOURS } from "../enums/hours";

export function useScheduleTime() {
	const days = ref(DAYS);
	const hours = ref(HOURS);

	const semanticDays = () => [""].concat(days.value.map(converToSemanticDay));

	const converToSemanticDay = (day: string) => day.slice(0, 3).toUpperCase();

	const semanticHours = () => hours.value.map(convertToSemanticHour);

	const convertToSemanticHour = (hour: string) =>
		hour.slice(0, hour.length > 3 ? 2 : 1) + ":" + hour.slice(-2);

	return {
		hours,
		semanticHours: semanticHours(),
		days,
		semanticDays: semanticDays(),
	};
}