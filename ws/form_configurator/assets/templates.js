/*(function (factory) {
	'use strict';
	if (typeof define === 'function' && define.amd) {
		define('formb-templates', ['jquery', 'validation'], factory);
	} else {
		factory(window.jQuery);
	}
}(function ($, validator, undefined) {
	$.itemb = $.itemb || {};
}));*/

				/*<div class="col-sm-12 drag_item base">
					<div class="item row dashed radius">
						<label class="col-sm-4 form-control-static dashed">文本框：</label>
						<div class="col-sm-8 dashed">
							<input type="text" class="form-control" />
						</div>
					</div>
				</div>*/

var shellTemplate = 
	'<div class="outerClass drag_item base">' +
		'<div class="item row formDescription">' +
			'<label class="labelClass form-control-static">' +
				'<span class="textRequired formLabel pull-right"></span>' +
			'</label>' +
			'<div class="contentClass">' +
				'<core></core>' +
				'<div class="help-block-error"></div>' +
			'</div>' +
		'</div>' +
	'</div>';

var core = {}, sub = {}, opts = {}, rule = {};



core.text = '<input type="text" class="form-control" />';
opts.text = {
	"name": "demo_text",
	"type": "text",						 // 基本类型
	"label": "文本框",
	"placeholder": "请输入文本",				// 非必填
	"description": "请输入英文、数字、下划线"
};
rule.text = {
	"required": false,
	"contentCheck": [
		"none",			// 无
		// "number",		// 数字
		"letter",		// 字母
		"postcode",		// 邮政编码
		"phone",		// 手机号码
		"email",		// 电子邮件
		"url",			// 网址
		"6To16Any",		// 6到16位任意字符
		"6To16Number",	// 6到16位数字
		"6To18Letter",	// 6到18位字符串
		"date",			// 日期
		"datetime",		// 日期时间
		"time",			// 时间
		"customize"		// 自定义(正则)
	]
};



core.select = '<select class="form-control"></select>';
opts.select = {
	"name": "demo_select",
	"type": "select",						 // 基本类型
	"label": "下拉框",
	"multiple": false,
	"placeholder": "--请选择--",				// 非必填
	"description": "请点击选择",
	"options": [
		{"label": "选项1", "value": 1},
		{"label": "选项2", "value": 2},
		{"label": "选项3", "value": 3}
	]
};
rule.select = {
	"required": false
};



core.radio = '<div class="formContent"></div>';
sub.radio =
	'<div class="radio clip-radio radio-primary radio-inline">' +
		'<input type="radio">' +
		'<label class="itemLabel"><input type="radio"></label>' +
	'</div>';
opts.radio = {
	"name": "demo_radio",
	"type": "radio",						 // 基本类型
	"label": "单选",
	"description": "单选描述",
	"options": [
		{"label": "选项1", "value": 1},
		{"label": "选项2", "value": 2},
		{"label": "选项3", "value": 3}
	]
};



core.checkbox = '<div class="formContent"></div>';
sub.checkbox =
	'<div class="checkbox clip-check check-primary checkbox-inline">' +
		'<input type="checkbox">' +
		'<label class="itemLabel"></label>' +
	'</div>';
opts.checkbox = {
	"name": "demo_checkbox",
	"type": "checkbox",						 // 基本类型
	"label": "多选",
	"description": "多选描述",
	"options": [
		{"label": "选项1", "value": 1},
		{"label": "选项2", "value": 2},
		{"label": "选项3", "value": 3}
	]
};

