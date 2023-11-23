var d = $
	('input:checkbox').size();
for (var i = 1; i <= d; i++){
	if ($("#" + i).is(":checked")) {
		param += $("#" + i + ":checkbox").val() + ";";
	}
}