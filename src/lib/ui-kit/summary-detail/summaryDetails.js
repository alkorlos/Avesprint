export function toggleSummaryDetails (openSummaryDetail, name) {
	if (openSummaryDetail !== name) {
		openSummaryDetail = name;
	}

	return openSummaryDetail;
}

export const isFirstDetails = (detail, details) => detail.name === details[0].name;
