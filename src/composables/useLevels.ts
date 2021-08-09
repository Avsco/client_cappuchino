import { computed, ComputedRef } from "vue";
import { useStore } from "vuex";
import { subjects, level } from "../interfaces";

export function useLevels() {
	const store = useStore();

	const detailLevel = (codeLevel: string): subjects | undefined => {
		const level = store.getters["departments/selectCarrer"]?.levels.find(
			(level: level) => level.code == codeLevel
		);
		return level ? level.subjects : undefined;
	};

	const levels: ComputedRef<string | undefined> = computed(() =>
		store.getters["departments/selectCarrer"]?.levels.map((level: level) => level.code)
	);

	return {
		levels,
		detailLevel,
	};
}
