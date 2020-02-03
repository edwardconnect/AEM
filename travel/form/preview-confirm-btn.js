console.log(customCtrl.apiObj.saveTravelAppFormApi);
$('.AIAEntityBtn button').attr('disabled', true);

$('.saveAppFormErrMsg .guideFieldError').html('');

$('.collectDataBtn button').trigger('click');

setTimeout(function () {
	customCtrl.saveTravelAppForm(function () {
		if (customCtrl.saveFormArrayResponse.success !== 'false') {

			if (customCtrl.saveFormArrayResponse.promoStatusCode !== '200') {
				//				if(customCtrl.saveFormArrayResponse.promoStatusCode == '301'){
				//					customCtrl.promoCodeErr = customCtrl.quoteData.promoCode +' ('+ customCtrl.saveFormArrayResponse.promoStatusCode+')';
				//				} else if(customCtrl.saveFormArrayResponse.promoStatusCode == '302'){
				//					customCtrl.promoCodeErr = customCtrl.quoteData.promoCode +' ('+ customCtrl.saveFormArrayResponse.promoStatusCode+')';
				//				} else if(customCtrl.saveFormArrayResponse.promoStatusCode == '303'){
				//					customCtrl.promoCodeErr = customCtrl.quoteData.promoCode +' ('+ customCtrl.saveFormArrayResponse.promoStatusCode+')';
				//				}
				customCtrl.promoCodeErr = customCtrl.errorMsg.promoCodeMsg[customCtrl.formLanguage][2][0] + customCtrl.quoteData.promoCode + customCtrl.errorMsg.promoCodeMsg[customCtrl.formLanguage][2][1];

				customCtrl.quoteData.promoCode = '';
				sessionStorage.setItem('quoteData', JSON.stringify(customCtrl.quoteData));

				customCtrl.getTravelQuotation(function () {
					window.parent.$('.product-details-bar .promoCodeMsg').html(customCtrl.promoCodeErr);
					$('.promoCodePanel .promoMsg .guideFieldError').html(customCtrl.promoCodeErr);
					$('.promoCodePanel .promoErrMsg .guideFieldError').html('');

					$('.confirmSaveForm button').trigger('click');
				});
			} else {
				$('.AIAEntityBtn button').attr('disabled', false);

				window.aiaNextClick(this.panel, 'nextItem');

				if (window.parent.aiaIshopPageFunction.sourceHandle.isiEngage()) {
					customCtrl.getAgentInfo();
				} else {
					if (customCtrl.loginData.loginArr.authToken == null) {
						nameOfCardholder.value = ownerLastNmInEng.value + ' ' + ownerFirstNmInEng.value;
					} else {
						nameOfCardholder.value = customCtrl.clientData.lastName + ' ' + customCtrl.clientData.firstName;
					}
				}

				if (customCtrl.saveFormArrayResponse.isNewPolicy == 'N') {
					financialPlannerAssignment.visible = false;
				} else {
					if (customCtrl.saveFormArrayResponse.clientCategory == '1') {
						$('.financialPlannerQuestion.guideCheckBoxItem label').html(customCtrl.langText.financialPlannerQuestion[customCtrl.formLanguage][0]);
						$('.financialPlannerQuestion.guideCheckBoxItem label').trigger('click');
					} else if (customCtrl.saveFormArrayResponse.clientCategory == '2') {
						$('.financialPlannerQuestion.guideCheckBoxItem label').html(customCtrl.langText.financialPlannerQuestion[customCtrl.formLanguage][1]);
						$('.financialPlannerQuestion.guideCheckBoxItem label').trigger('click');
					} else if (customCtrl.saveFormArrayResponse.clientCategory == '3') {
						FPQuestList.instanceManager.addInstance();
						$('.financialPlannerQuestion.guideCheckBoxItem').eq(0).find('label').html(customCtrl.langText.financialPlannerQuestion[customCtrl.formLanguage][2]);
						$('.financialPlannerQuestion.guideCheckBoxItem').eq(0).find('label').trigger('click');
						$('.financialPlannerQuestion.guideCheckBoxItem').eq(1).find('label').html(customCtrl.langText.financialPlannerQuestion[customCtrl.formLanguage][0]);
					} else if (customCtrl.saveFormArrayResponse.clientCategory == '4') {
						FPQuestList.instanceManager.addInstance();
						$('.financialPlannerQuestion.guideCheckBoxItem').eq(0).find('label').html(customCtrl.langText.financialPlannerQuestion[customCtrl.formLanguage][1]);
						$('.financialPlannerQuestion.guideCheckBoxItem').eq(1).find('label').html(customCtrl.langText.financialPlannerQuestion[customCtrl.formLanguage][2]);
					} else {
						// for staff mode: clientCategory 5 & 6
						financialPlannerAssignment.visible = false;
					}
				}

				creditCardType.validationsDisabled = false;
				nameOfCardholder.validationsDisabled = false;
				cardNo.validationsDisabled = false;
				cardExpiryMonth.validationsDisabled = false;
				cardExpiryYear.validationsDisabled = false;
				securityCode.validationsDisabled = false;

				if (window.parent.aiaIshopPageFunction.sourceHandle.isiEngage()) {
					if (customCtrl.returnQuotation.quotations[0].paymentGatewayTransactionAmount > 4000) {
						//						agentDeclarationPayment.visible = true;
						agentDeclarationChkboxPayment.visible = true;
						agentDeclarationChkboxPayment.validationsDisabled = false;

						agentCreditCardReq.visible = false;
						agentCreditCardReq.validationsDisabled = true;
					} else {
						//						agentDeclarationPayment.visible = false;
						agentDeclarationChkboxPayment.visible = false;
						agentDeclarationChkboxPayment.validationsDisabled = true;

						agentCreditCardReq.visible = true;
						agentCreditCardReq.validationsDisabled = false;
					}
				} else {
					//					agentDeclarationPayment.visible = false;
					agentDeclarationChkboxPayment.visible = false;
					agentDeclarationChkboxPayment.validationsDisabled = true;

					agentCreditCardReq.visible = false;
					agentCreditCardReq.validationsDisabled = true;
				}

				// add on 20190718
				creditCardType.value = 'V';

				$('.doPayment .paymentDetails .product-details-info').empty();

				//			if(typeof customCtrl.saveFormArrayResponse.promoStatusCode !== undefined){
				//				if(customCtrl.saveFormArrayResponse.promoStatusCode == 'pc2001' || customCtrl.saveFormArrayResponse.promoStatusCode == '' || customCtrl.saveFormArrayResponse.promoStatusCode == null){
				//					customCtrl.pc2001 = true;
				//
				//					$('.promoCodePanel .guideFieldError').html('');
				//					$('.promoCodePanel .promoMsg .guideFieldError').text(customCtrl.errorMsg.pc2001);
				//				}
				//			}

				$(window.parent.document).find('.product-details-bar .product-details-info > div').clone().appendTo('.doPayment .paymentDetails .product-details-info');
				window.parent.$('.product-details-bar').hide();
				window.parent.$('.topSpacer').hide();
				window.parent.$('.step-line-block .progress-line-container .progress-line').removeClass('margin-top-5xl');

				customCtrl.girdAdjust();

				$(window.parent.document).scrollTop(0);
			}
		} else {
			$('.AIAEntityBtn button').attr('disabled', false);

			if (customCtrl.saveFormArrayResponse.code == 'tc2001' || customCtrl.saveFormArrayResponse.code == 'pc2001') {
				customCtrl.tc2001 = true;

				if (customCtrl.loginData.loginArr.authToken == null) {
					$('.saveAppFormErrMsg .guideFieldError').html(customCtrl.errorMsg.tc2001[customCtrl.formLanguage]);
				} else {
					window.top.location.href = window.top.location.href.replace('/application-form', '');
				}
			} else {
				console.log(customCtrl.saveFormArrayResponse);
				$('.saveAppFormErrMsg .guideFieldError').html(customCtrl.errorMsg.saveAppFormErr[customCtrl.formLanguage][0] + customCtrl.saveFormArrayResponse.code + ' / ' + customCtrl.purKey + customCtrl.errorMsg.saveAppFormErr[customCtrl.formLanguage][1]);
			}
		}
		if (customCtrl.saveFormArrayResponse.code == 'tc4004') {
			$('.saveAppFormErrMsg .guideFieldError').html(customCtrl.errorMsg.hkidMessage[customCtrl.formLanguage] + '(Code :' + customCtrl.purKey + ')')
		}

	});
}, 200);