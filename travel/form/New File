;
console.log('loading root panel rules');
window.parent.getConfig(function (conf) {
    console.log('conf', conf);
    var apiDomain = conf.apiDomain;

    ;
    (function () {
        console.log('Form start');

        sessionStorage.removeItem('fromManage');

        var scope = this;
        if (sessionStorage.selectCat == undefined || sessionStorage.quoteData == undefined || sessionStorage.planData == undefined || sessionStorage.returnQuotation == undefined) {
            window.top.location.href = window.top.location.href.replace('/application-form', '');
        }

        window.parent.$('#aemFormFrame').attr('scrolling', 'no');

        scope.customCtrl = {};
        scope.customCtrl.apiDomain = apiDomain;
        scope.customCtrl.apiObj = {};
        scope.customCtrl.apiObj.travelLoginApi = customCtrl.apiDomain.www9connect + window.parent.$('input[name="travelLoginApi"]').val();
        scope.customCtrl.apiObj.accountOwnershipApi = customCtrl.apiDomain.www9connect + '/accountOwnership/v2';
        scope.customCtrl.apiObj.getTravelClientInfoApi = customCtrl.apiDomain.www9ecomm + window.parent.$('input[name="getTravelClientInfoApi"]').val();
        scope.customCtrl.apiObj.checkExistingCustomerApi = customCtrl.apiDomain.www9ecomm + window.parent.$('input[name="checkExistingCustomerApi"]').val();
        scope.customCtrl.apiObj.genPurKeyApi = customCtrl.apiDomain.www9ecomm + window.parent.$('input[name="genPurKey"]').val();
        scope.customCtrl.apiObj.getTravelQuotationApi = customCtrl.apiDomain.www9ecomm + window.parent.$('input[name="getTravelQuotationApi"]').val();
        scope.customCtrl.apiObj.saveTravelAppFormApi = customCtrl.apiDomain.www9ecomm + window.parent.$('input[name="saveTravelAppFormApi"]').val();
        scope.customCtrl.apiObj.doTravelPaymentApi = customCtrl.apiDomain.www9ecomm + window.parent.$('input[name="doTravelPaymentApi"]').val();
        scope.customCtrl.apiObj.getAgentInfo = customCtrl.apiDomain.www9ecomm + window.parent.$('input[name="getAgentInfo"]').val();

        scope.customCtrl.formLanguage = window.parent.$('#website-locale').val();
        scope.customCtrl.selectSpouse = false;
        scope.customCtrl.selectChild = false;
        scope.customCtrl.getProductSrcParameter = false;
        if (sessionStorage.getProductSrcParameter !== undefined) {
            scope.customCtrl.getProductSrcParameter = JSON.parse(sessionStorage.getProductSrcParameter);
        }
        scope.customCtrl.purKey = sessionStorage.purKey;
        scope.customCtrl.langText = {
            male: {
                "en": "Male",
                "zh-hk": "男"
            },
            female: {
                "en": "Female",
                "zh-hk": "女"
            },
            numberOfDays: {
                "en": "Day(s)",
                "zh-hk": "日"
            },
            travelers: {
                "en": ["Adult(s)", "Child(rens)"],
                "zh-hk": ["成人", "兒童"]
            },
            payNowBtn: {
                "en": "Confirm",
                "zh-hk": "確定"
            },
            financialPlannerQuestion: {
                "en": [
                    "I would like an AIA Financial Planner to contact me.",
                    "I would like my current AIA Financial Planner to contact me.",
                    "I will contact my Financial Planner."
                ],
                "zh-hk": [
                    "請讓AIA財務策劃顧問與我聯絡。",
                    "請讓我現有的AIA財務策劃顧問與我聯絡。",
                    "我會自行聯絡我的財務策劃顧問。"
                ]
            },
            payGrossNet: {
                "en": "Commission",
                "zh-hk": "佣金"
            }
        };
        scope.customCtrl.errorMsg = {
            loginEmpty: {
                "en": "Your login ID / password is invalid. Please re-enter.",
                "zh-hk": "您提供的賬戶名稱／密碼不正確，請重新輸入。"
            },
            ccid: {
                "en": "Not applicable to MPF, ORSO, Macau Pension and AIA Vitality Member account(s).",
                "zh-hk": "不適用於強積金/公積金/澳門退休金/AIA Vitality 健康程式會員賬戶。"
            },
            getTravelClientInfoErr: {
                "en": "Get client info data error, please try again later",
                "zh-hk": "Get client info data error, please try again later"
            },
            emailMessage: {
                "en": "The email address are different. Please enter a valid email.",
                "zh-hk": "電郵地址不相同，請輸入有效之電郵地址"
            },
            beneSumMessage: {
                "en": "The sum of % must be 100.",
                "zh-hk": "百分比(%)的總和必須為100"
            },
            nameEngValidErr: {
                "en": "Please enter a valid English name.",
                "zh-hk": "請輸入有效之英文名字"
            },
            nameChiValidErr: {
                "en": "Please enter a valid Chinese name.",
                "zh-hk": "請輸入有效之中文名字"
            },
            hkidMessage: {
                "en": "Please enter a valid HKID.",
                "zh-hk": "請輸入有效之香港身份證號碼"
            },
            saveAppFormErr: {
                "en": ["Oops! Unable to perform this action. Please reload the page and try again. (Code: ", ")"],
                "zh-hk": ["噢，無法執行此操作。請重新載入此網頁及重試。(Code: ", ")"]
            },
            getClientInfoErrBL4021: {
                "en": ["Oops! Unable to perform this action. Please reload the page and try again. (Code: ", ")"],
                "zh-hk": ["噢，無法執行此操作。請重新載入此網頁及重試。(Code: ", ")"]
            },
            getClientInfoErrBL4025: {
                "en": "We are not able to find any inforce policy in your account,  please input your personal information.",
                "zh-hk": "我們沒有於賬戶找到已生效的保單，請填寫您的個人資料。"
            },
            spouseSameSex: {
                "en": "Family plan covers a legally married couple.",
                "zh-hk": "家庭計劃適用於一對合法夫婦"
            },
            promoCodeMsg: {
                "en": [
                    ["Promo code (", ") applied."],
                    "Promo code is not valid.",
                    ["Sorry, the promo code (", ") is not valid for this purchase, the payment breakdown has been updated."]
                ],
                "zh-hk": [
                    ["成功使用優惠(", ")"],
                    "Promo code is not valid.",
                    ["抱歉，優惠碼(", ")並不適用於此旅程，付款細節已更新。"]
                ]
            },
            tc2001: {
                "en": "Submission failed, please login or contact AIA Customer Service at 3108 1928.",
                "zh-hk": "提交失敗。請登錄以了解更多資訊或致電3108 1928聯繫友邦客戶服務中心。"
            },
            hasOtherActivePolicy: {
                "en": "A new policy will be issued due to a change in financial planner.",
                "zh-hk": "由於財務策劃顧問的改變，我們將會繕發新的旅遊保單。"
            },
            hasOtherActivePolicy4Payment: {
                "en": "A new policy will be issued due to a change in financial planner.",
                "zh-hk": "由於財務策劃顧問的改變，我們將會繕發新的旅遊保單。"
            },
            selectInsuredErrMsg: {
                "en": [
                    "Please select insured person(s).",
                    "You have selected too many insured persons."
                ],
                "zh-hk": [
                    "請選擇受保人。",
                    "您選擇的受保人過多。"
                ]
            },
            addressLengthErrorMessage: {
                "en": "Please input address with length less than 30 characters (English) or 10 characters (Chinese)",
                "zh-hk": "請輸入地址字數少於30字(英文)或10字(中文)"
            },
            creditCardErrBL6006: {
                "en": ["Please enter a valid credit card number.<br>We accept locally issued Visa and Mastercard credit cards only. (Code: ", ")"],
                "zh-hk": ["請輸入有效之信用卡號碼。<br>只接受以香港發行之Visa和Mastercard信用卡繳費。(Code: ", ")"]
            }
        };
        scope.customCtrl.promoCodeMsg = '';
        scope.customCtrl.promoCodeErr = '';
        //		scope.customCtrl.prevSuccessCode = '';
        scope.customCtrl.currPostion = 0;
        scope.customCtrl.preSubmitTempData;
        scope.customCtrl.isAIACustomer = 'N';
        scope.customCtrl.planData = JSON.parse(sessionStorage.planData);
        scope.customCtrl.quoteInput = JSON.parse(sessionStorage.quoteInput);
        scope.customCtrl.returnQuotation = JSON.parse(sessionStorage.returnQuotation);
        scope.customCtrl.selectCat = JSON.parse(sessionStorage.selectCat);
        scope.customCtrl.quoteData = JSON.parse(sessionStorage.quoteData);

        scope.customCtrl.saveFormArray = {};
        scope.customCtrl.saveFormArrayResponse = {};
        scope.customCtrl.checkExistingCustomerResponse = null;

        scope.customCtrl.loginData = {
            loginInfo: {
                language: customCtrl.formLanguage,
                appId: "AIAConnect"
            },
            loginArr: {
                purchaseKey: customCtrl.purKey,
                authToken: null,
                tripStartDate: customCtrl.quoteData.tripStartDate,
                tripEndDate: customCtrl.quoteData.tripEndDate
            }
        };
        //		scope.customCtrl.loginData.completeLogin=[false,false];

        // loading icon from ajax call
        $(document).ajaxStart(function () {
            $(window.parent.document).find('#aia-portal-ref-loading').show();
        })
            .ajaxStop(function () {
                $(window.parent.document).find('#aia-portal-ref-loading').hide();
                // $(window.parent.document).scrollTop(0);
            });

        // ======================================================  Init  ====================================================== 	
        var init = function () {
            console.log('init start');

            if ($('.beneSharePercent input').eq(0).val() == '') {
                (eval('beneSharePercent')).value = 100;
            }

            var nullHandling = sessionStorage.getItem('nullHandling');
            if (nullHandling) {
                $('.clientInfoFailMsg .guideFieldError').html(customCtrl.errorMsg.getClientInfoErrBL4025[customCtrl.formLanguage]);
            }

            sessionStorage.setItem('pageLang', customCtrl.formLanguage);

            $('.guideContainerWrapperNode').off('swiperight');
            $('.guideContainerWrapperNode').off('swipeleft');
            $('.guideNavIcon').attr('data-guide-toggle', '');

            //			$('.insuredSelectDiv a').addClass('hidden');

            //			prefill when logged in
            var isNullClientData = sessionStorage.getItem('clientData') == 'null' || sessionStorage.getItem('clientData') == undefined;
            if (typeof sessionStorage.clientData !== 'undefined' && !isNullClientData && typeof sessionStorage.jwt !== 'undefined') {
                console.log('have client data');
                customCtrl.clientData = JSON.parse(sessionStorage.clientData);
                customCtrl.loginData.loginArr.authToken = JSON.parse(sessionStorage.jwt).access_token;

                if (typeof customCtrl.clientData.companions == 'undefined') {
                    customCtrl.getTravelClientInfo();
                } else {
                    if (customCtrl.clientData.companionPolNo !== '' && customCtrl.clientData.companionPolNo !== null) {
                        activeTravelAlert.visible = true;
                        $('.activeTravelAlert .text-wrapper h6').text(customCtrl.clientData.companionPolNo);
                    }
                    customCtrl.filltravelClientData();
                }
            } else if (typeof sessionStorage.clientData == 'undefined' && !isNullClientData && typeof sessionStorage.jwt !== 'undefined') {
                customCtrl.loginData.loginArr.authToken = JSON.parse(sessionStorage.jwt).access_token;

                customCtrl.getTravelClientInfo();
            }

            if (!isNullClientData) {
                // sessionStorage.removeItem('jwt');
                // sessionStorage.removeItem('clientData');
                // sessionStorage.removeItem('clientAccountOwnership');
            }

            if (window.parent.aiaIshopPageFunction.sourceHandle.isiEngage()) {
                $('.login-block-app-form').addClass('hidden');

                if (customCtrl.quoteData.plans[0].coiPayMode !== 'GROSS') {
                    promoCodeSection.visible = false;

                    window.parent.$('.product-details-bar .product-details-info .promoDiscount .payment-descript span, .product-details-bar .product-details-info .promoCodeMsg').remove();
                }
            } else if (typeof customCtrl.quoteData.staffEmail !== 'undefined' && customCtrl.quoteData.staffEmail !== '') {
                promoCodeSection.visible = false;

                window.parent.$('.product-details-bar .product-details-info .promoDiscount .payment-descript span, .product-details-bar .product-details-info .promoCodeMsg').remove();

                relationshipWithTheEmployee.visible = true;

                if (!!sessionStorage.buy4yrself && sessionStorage.buy4yrself == 'N') {
                    $('.staffBuyForOwn.guideRadioButtonItem label').eq(1).trigger('click');
                }
            }

            customCtrl.getCompanionsData();

            customCtrl.getTravelQuotation();

            // Declaration required field
            readUnderstood.validationsDisabled = true;
            declaration.validationsDisabled = true;
            agentDeclarationChkboxDeclaration.validationsDisabled = true;
            // checkCancellation.validationsDisabled = true;

            // Payment required field
            creditCardType.validationsDisabled = true;
            nameOfCardholder.validationsDisabled = true;
            cardNo.validationsDisabled = true;
            cardExpiryMonth.validationsDisabled = true;
            cardExpiryYear.validationsDisabled = true;
            securityCode.validationsDisabled = true;
            agentCreditCardReq.validationsDisabled = true;
            agentDeclarationChkboxPayment.validationsDisabled = true;

            if (customCtrl.purKey == undefined) {
                genPurKey();
            }

            // fill plan data
            window.parent.$('.product-details-bar .product-info .product-name h6, .product-details-bar .basic-info-block .plan-name').text(customCtrl.planData.productNm + ' - ' + customCtrl.selectCat.choosePlan + ' - ' + customCtrl.quoteInput.numberOfDays + ' ' + customCtrl.langText.numberOfDays[customCtrl.formLanguage]);

            if (scope.customCtrl.formLanguage == "en") {
                window.parent.$('.product-details-bar .basic-info-block .tripdate .tripStartDate').text(customCtrl.quoteInput.tripStartDate);
                window.parent.$('.product-details-bar .basic-info-block .tripdate .tripEndDate').text(customCtrl.quoteInput.tripEndDate);
            } else if (scope.customCtrl.formLanguage == "zh-hk") {
                var zhTripStartDate = moment(customCtrl.quoteData.tripStartDate, "YYYYMMDD").format("DD-MM-YYYY");
                var zhTripEndDate = moment(customCtrl.quoteData.tripEndDate, "YYYYMMDD").format("DD-MM-YYYY");
                window.parent.$('.product-details-bar .basic-info-block .tripdate .tripStartDate').text(zhTripStartDate);
                window.parent.$('.product-details-bar .basic-info-block .tripdate .tripEndDate').text(zhTripEndDate);
            }

            $('.periodOfInsurance .effectiveDate span').text(customCtrl.quoteInput.tripStartDate);
            $('.periodOfInsurance .endDate span').text(customCtrl.quoteInput.tripEndDate);

            var _travelerText = '';
            _travelerText += customCtrl.quoteInput.numberOfAdults + ' ' + customCtrl.langText.travelers[customCtrl.formLanguage][0];
            if (customCtrl.quoteInput.numberOfChildren > 0) {
                _travelerText += ', ' + customCtrl.quoteInput.numberOfChildren + ' ' + customCtrl.langText.travelers[customCtrl.formLanguage][1];
            }
            window.parent.$('.product-details-bar .basic-info-block .travelers').text(_travelerText);

            // fill Quote data
            window.parent.$('.product-details-bar .product-info .total-cost .amount, .product-details-bar .total-initial-payment .amount').text(customCtrl.returnQuotation.initialPolicyCost);
            window.parent.$('.product-details-bar .breakdown-list .totalPremium .amount').text(customCtrl.returnQuotation.totalPremium);
            window.parent.$('.product-details-bar .breakdown-list .levyCharge .amount').text(customCtrl.returnQuotation.levyAmount);

            if (customCtrl.returnQuotation.availableCreditBalance !== null) {
                window.parent.$('.product-details-bar .breakdown-list .travelCredit .amount').text(customCtrl.returnQuotation.availableCreditBalance);
            } else {
                window.parent.$('.product-details-bar .breakdown-list .travelCredit .amount').text('0');
            }


            $(document).on('click', '.insuredSelectDiv a', function () {
                var target = '';
                $('.selecting').removeClass('selecting');
                if ($(this).parent().hasClass('spouseItem')) {
                    target = 'spouseItem';
                } else {
                    target = 'childItem';
                }
                console.log(target);
                console.log('click select insured');
                $(this).closest('.guidePanelNode.' + target).addClass('selecting');

                customCtrl.currPostion = $(window.parent.document).scrollTop();
                $(window.parent.document).find('.triggerSelectInsured button').trigger('click');
                genInsured(target);
            });

            customCtrl.girdAdjust();

            $(document).on('change', '.toUpperCase input', function () {
                $(this).val(function () {
                    return this.value.toUpperCase();
                });
            });
            //			$(document).on('keypress keydown keyup', '.toUpperCase input', function(){
            //				$(this).val(function() {
            //					return this.value.toUpperCase();
            //				});
            //			});
            //			$('.toUpperCase input').on('change', function() {
            //				$(this).val(function() {
            //					return this.value.toUpperCase();
            //				});
            //			});

            $(document).on('keypress', 'input, textarea', function (e) {
                var isNameField = false;
                if ($(this).closest('.guideFieldNode.guideTextBox').hasClass('ownerLastNmInEng') || $(this).closest('.guideFieldNode.guideTextBox').hasClass('ownerFirstNmInEng')) {
                    isNameField = true;
                }

                if (!isNameField) {
                    var value = e.target.value;
                    var re = /[$={}\[\]<>]/g;
                    var found = value.match(re);
                    if (found && found.length > 0) {
                        e.target.value = value.replace(re, '');
                    }
                }
            });

            //            $('input, textarea').on('keypress', function(e){
            //				var value = e.target.value;
            //                var re = /[$={}\[\]<>]/g;
            //                var found = value.match(re);
            //                if(found && found.length > 0){
            //                    e.target.value = value.replace(re, '');
            //                }
            //			});
            //			$('input textarea').on('change', function(e){
            //				e.target.value = e.target.value.replace(/[$={}\[\]<>]/g, '');
            //            });

            //			$(document).on('keypress keydown keyup', 'input', function(e){
            //				e.target.value = e.target.value.replace(/[$={}\[\]<>]/g, '');
            //			});

            $(document).on('keypress keydown keyup', '.checkhkid input', function (e) {
                var inputValue = e.charCode;

                if (!(48 <= inputValue && inputValue <= 57) && !(65 <= inputValue && inputValue <= 90) && !(97 <= inputValue && inputValue <= 122) && inputValue !== 0 && inputValue !== 8 && inputValue !== 46) {
                    return false;
                }
            });
            $(document).on('change', '.checkhkid input', function () {
                var target = $(this).closest('.checkhkid').attr('class');
                target = target.split(' ')[3];

                setTimeout(function () {
                    if (checkID(target)) {
                        $('.' + target + ' input').parents('.' + target).removeClass('validation-failure').find('.guideFieldError').removeAttr('role').text('').hide();
                    } else {
                        $('.' + target + ' input').parents('.' + target).removeClass('validation-success').addClass('validation-failure').find('.guideFieldError').attr('role', 'alert').text(customCtrl.errorMsg.hkidMessage[customCtrl.formLanguage]).show();
                    }
                }, 100);
            });

            $('.ownerEmailAddress input, .ownerReEnterEmailAddress input').on("cut copy paste", function (e) {
                e.preventDefault();
            });

            $(document).on('keypress keydown keyup', '.digitOnly input', function (e) {
                var inputValue = e.charCode;

                if (!(inputValue >= 48 && inputValue <= 57) && inputValue !== 0) {
                    return false;
                }
            });

            $('.countAddressLength input').on('change', function () {
                var value = $(this).val();
                var lengthOfAddress = customCtrl.countAddressLength(value);
                //				console.log('count address', value.length, lengthOfAddress);

                if (lengthOfAddress > 30) {
                    $(this).closest('.guideFieldNode').addClass('validation-failure').find('.guideFieldError').attr('role', 'alert').text(customCtrl.errorMsg.addressLengthErrorMessage[customCtrl.formLanguage]).css('visibility', 'visible').css('display', 'block');
                } else {
                    $(this).closest('.guideFieldNode').removeClass('validation-failure').find('.guideFieldError').removeAttr('role').text('').css('visibility', 'hidden').css('display', 'none');
                }
            });

            $('.checkhkid input').attr('maxlength', 9);


            $('.englishOnly input').on({
                input: function () {
                    var inputValue = $(this).val(),
                        target = $(this).closest('.guideFieldNode.guideTextBox').attr('class').split(' ', 4)[3],
                        block = 'chi',
                        msg = customCtrl.errorMsg.nameEngValidErr[customCtrl.formLanguage];

                    //					setTimeout(function(){
                    customCtrl.limitInputEntry(inputValue, target, block, msg);

                    //						console.log('englishOnly input');
                    //					},200);
                },
                change: function (e) {
                    var isNameField = false,
                        runCheck = true;

                    if ($(this).closest('.guideFieldNode.guideTextBox').hasClass('ownerLastNmInEng') || $(this).closest('.guideFieldNode.guideTextBox').hasClass('ownerFirstNmInEng')) {
                        isNameField = true;
                    }

                    if (isNameField) {
                        var value = e.target.value;
                        //						var re = /[$={}\[\]<>]/g;
                        var re = /[`~!@#%^&*()_\-+|;:'",.\\/?$={}\[\]<>]/g;
                        var found = value.match(re);
                        if (found && found.length > 0) {
                            runCheck = false;
                            //							e.target.value = value.replace(re, '');
                        } else {
                            runCheck = true;
                        }
                    }
                    //					console.log('englishOnly change');
                    //					console.log('isNameField= '+ isNameField+', runCheck= '+runCheck);

                    if (runCheck) {
                        var inputValue = $(this).val(),
                            target = $(this).closest('.guideFieldNode.guideTextBox').attr('class').split(' ', 4)[3],
                            block = 'chi',
                            msg = customCtrl.errorMsg.nameEngValidErr[customCtrl.formLanguage],
                            mandatory = false;

                        if (inputValue.length > 0) {
                            setTimeout(function () {
                                customCtrl.limitInputEntry(inputValue, target, block, msg);
                            }, 100);
                        } else {
                            if ($('.' + target).attr('data-mandatory')) {
                                mandatory = true;
                            }
                            console.log(mandatory);

                            if (!mandatory) {
                                $('.' + target + ' input').parents('.' + target).removeClass('validation-failure').find('.guideFieldError').removeAttr('role').text('').hide();
                            }
                        }
                    }
                }
            });

            $('.chineseOnly input').on({
                input: function () {
                    var inputValue = $(this).val(),
                        target = $(this).closest('.guideFieldNode.guideTextBox').attr('class').split(' ', 4)[3],
                        block = 'en',
                        msg = customCtrl.errorMsg.nameChiValidErr[customCtrl.formLanguage];

                    //					setTimeout(function(){
                    customCtrl.limitInputEntry(inputValue, target, block, msg);
                    //					},200);
                },
                change: function () {
                    var inputValue = $(this).val(),
                        target = $(this).closest('.guideFieldNode.guideTextBox').attr('class').split(' ', 4)[3],
                        block = 'en',
                        msg = customCtrl.errorMsg.nameChiValidErr[customCtrl.formLanguage],
                        mandatory = false;

                    if (inputValue.length > 0) {
                        setTimeout(function () {
                            customCtrl.limitInputEntry(inputValue, target, block, msg);
                        }, 100);
                    } else {
                        if ($('.' + target).attr('data-mandatory')) {
                            mandatory = true;
                        }
                        console.log(mandatory);

                        if (!mandatory) {
                            $('.' + target + ' input').parents('.' + target).removeClass('validation-failure').find('.guideFieldError').removeAttr('role').text('').hide();
                        }
                    }
                }
            });

            $(document).on('change', '.guideTextBox input', function () {
                $(this).val($.trim($(this).val()));
            });

            $(document).on('change', '.beneSharePercent input', function () {
                $(this).val(parseFloat($(this).val()));

                var total = 0;
                for (var i = 0; i < $('.beneSharePercent input').length; i++) {

                    console.log($('.beneSharePercent input').length, $('.beneSharePercent input').eq(i).val());
                    total += parseFloat($('.beneSharePercent input').eq(i).val());
                }

                console.log(total);

                if (total !== 100) {
                    $('.beneficiaryInfo .beneSharePercent input').parents('.beneSharePercent').removeClass('validation-success');
                    $('.beneficiaryInfo .beneSharePercent input').parents('.beneSharePercent').addClass('validation-failure').find('.guideFieldError').attr('role', 'alert').html(customCtrl.errorMsg.beneSumMessage[customCtrl.formLanguage]).attr('style', 'visibility:visible; display:block');

                    _pass = false;
                } else {
                    $('.beneficiaryInfo .beneSharePercent input').parents('.beneSharePercent').addClass('validation-success');
                    $('.beneficiaryInfo .beneSharePercent input').parents('.beneSharePercent').removeClass('validation-failure').find('.guideFieldError').removeAttr('role').html('').attr('style', 'visibility:hidden; display:none');
                }
            });

            $('.datePicker input').prop('readonly', true);

            $('.datePicker input').on('change', function () {
                $(this).blur();
            });

            if (customCtrl.quoteInput.numberOfAdults > 1) {
                $('.ownerGender input').on('click', function () {
                    if ($('.ownerGender input:checked').val() == 'M') {
                        $('.spouseGender.guideRadioButtonItem label').eq(0).trigger('click');
                    } else {
                        $('.spouseGender.guideRadioButtonItem label').eq(1).trigger('click');
                    }
                });

                $('.spouseGender input').on('click', function () {
                    if (customCtrl.loginData.loginArr.authToken == null) {
                        if ($('.spouseGender input:checked').val() == 'M') {
                            $('.ownerGender.guideRadioButtonItem label').eq(0).trigger('click');
                        } else {
                            $('.ownerGender.guideRadioButtonItem label').eq(1).trigger('click');
                        }
                    } else {
                        //						if($('.spouseGender input:checked').val() == customCtrl.ownerInfo.gender){
                        if ($('.spouseGender input:checked').val() == customCtrl.clientData.gender) {
                            $('.guideCheckBox.spouseGender').removeClass('validation-success').addClass('validation-failure').find('.guideFieldError').attr('role', 'alert').html(customCtrl.errorMsg.spouseSameSex[customCtrl.formLanguage]).show();
                        } else {
                            $('.guideCheckBox.spouseGender').removeClass('validation-failure').find('.guideFieldError').removeAttr('role').text('').hide();
                        }
                    }
                });
            }

            $('.ownerEmailAddress input').on('change', function () {
                setTimeout(function () {
                    if ($('.ownerReEnterEmailAddress input').val().length !== 0) {
                        if ($('.ownerEmailAddress input').val() !== $('.ownerReEnterEmailAddress input').val()) {
                            $('.ownerEmailAddress').removeClass('validation-success').addClass('validation-failure').find('.guideFieldError').attr('role', 'alert').html(customCtrl.errorMsg.emailMessage[customCtrl.formLanguage]).show();
                        } else {
                            $('.ownerEmailAddress, .ownerReEnterEmailAddress').removeClass('validation-failure').find('.guideFieldError').removeAttr('role').text('').hide();
                        }
                    }
                }, 100);
            });

            $('.ownerReEnterEmailAddress input').on('change', function () {
                setTimeout(function () {
                    if ($('.ownerEmailAddress input').val().length !== 0) {
                        if ($('.ownerEmailAddress input').val() !== $('.ownerReEnterEmailAddress input').val()) {
                            $('.ownerReEnterEmailAddress').removeClass('validation-success').addClass('validation-failure').find('.guideFieldError').attr('role', 'alert').html(customCtrl.errorMsg.emailMessage[customCtrl.formLanguage]).show();
                        } else {
                            $('.ownerEmailAddress, .ownerReEnterEmailAddress').removeClass('validation-failure').find('.guideFieldError').removeAttr('role').text('').hide();
                        }
                    }
                }, 100);
            });

            window.parent.$('.product-details-bar .total-cost').on('click', function () {
                console.log('product-details-bar clicked');

                $('.promoCodeSection .promoCodePanel .promoErrMsg .guideFieldError').html('');

                if (!window.parent.$('.product-details-info.collapse').hasClass('animation')) {
                    if (!window.parent.$('.product-details-info.collapse').hasClass('open')) {
                        $.when(customCtrl.getTravelQuotation()).then(function () {
                            window.parent.$('.product-details-info.collapse').addClass('open animation');
                            window.parent.$('.dropdown-layer').addClass('in');
                            window.parent.$('.product-details-info.collapse').slideDown("slow", function () {
                                window.parent.$('.total-cost').css('background', '#f8f8f8');
                                window.parent.$('.product-info .dropdown-arrow').css('transform', 'rotate(270deg)');
                                window.parent.$('.product-details-info.collapse').removeClass('animation');
                            });
                        });
                    } else {
                        window.parent.$('.product-details-info.collapse').addClass('animation');
                        window.parent.$('.product-details-info.collapse').slideUp("slow", function () {
                            window.parent.$('.total-cost').css('background', '#ffffff');
                            window.parent.$('.product-info .dropdown-arrow').css('transform', 'rotate(90deg)');
                            window.parent.$('.dropdown-layer').removeClass('in');
                            window.parent.$('.product-details-info.collapse').removeClass('open animation');
                        });
                    }
                }
            });

            $(document).on('click', '.promoCodeSection .promoCodePanel button', function () {
                if ($('.promoCodePanel input').val() !== '' && $('.promoCodePanel input').val().length > 0) {

                    if (customCtrl.quoteData.promoCode == $('.promoCodePanel input').val()) {
                        $('.promoCodeSection .promoCodePanel .promoErrMsg .guideFieldError').text(customCtrl.errorMsg.promoCodeErr[customCtrl.formLanguage][0][0] + customCtrl.quoteData.promoCode + customCtrl.errorMsg.promoCodeErr[customCtrl.formLanguage][0][1]);
                    } else {
                        //						customCtrl.prevSuccessCode = customCtrl.quoteData.promoCode;

                        customCtrl.quoteData.promoCode = $('.promoCodePanel input').val();

                        customCtrl.getTravelQuotation(function () {
                            customCtrl.capData2Preview();
                            customCtrl.saveTravelAppForm();
                        });
                    }
                }
            });

            $(document).on('click', '.childNonPermanentHkid.guideCheckBoxGroup, .nonPermanentHkid.guideCheckBoxGroup', function () {
                $(this).closest('.guidePanelNode').find('.guidePanelNode .guideFieldError').text('').hide();
            });

            $(document).on('click', '.doPayment .product-details-info .promoDiscount .removeCode', function () {
                customCtrl.quoteData.promoCode = '';
                sessionStorage.setItem('quoteData', JSON.stringify(customCtrl.quoteData));

                customCtrl.getTravelQuotation(function () {
                    customCtrl.capData2Preview();
                    customCtrl.saveTravelAppForm();
                });
            });

            //			if(customCtrl.selectCat.source && ( customCtrl.selectCat.source.toLowerCase() == 'o' || customCtrl.selectCat.source.toLowerCase() == 'c' )){
            //				customCtrl.goInfomationPage();
            //				customCtrl.goStep1progress();
            //            }

            // Hide Login page start
            $('.loginBtnSubmit button').on('click', function () {
                var uid = $('.login-block-app-form .login-id input').val().trim();
                var password = $('.login-block-app-form .login-pin input').val().trim();

                if (uid && password) {
                    $('.login-msg').removeClass('fieldError label-error').text('');
                    customCtrl.loginData.loginInfo.uid = uid;
                    customCtrl.loginData.loginInfo.password = password;
                    travelLogin();
                } else {
                    var errorMsg = scope.customCtrl.errorMsg.loginEmpty[scope.customCtrl.formLanguage];
                    $('.login-msg').addClass('fieldError label-error').html(errorMsg);
                }
            });

            $('.login-block-app-form .login-section .slide-down-arrow').on('click', function () {
                if (!$('.login-collapse').hasClass('open')) {
                    $('.login-collapse').addClass('open');
                    $('.login-collapse, .login-collapse').slideDown("slow", function () {
                        $('.login-section .slide-down-arrow').css('transform', 'rotate(270deg)');
                    });
                } else {
                    $('.login-collapse').slideUp("slow", function () {
                        $('.login-section .slide-down-arrow').css('transform', 'rotate(90deg)');
                        $('.login-collapse').removeClass('open');
                    });
                }
            });

            //			customCtrl.goInfomationPage();
            //			customCtrl.goStep1progress();
            $('.basicInfoBackBtn').hide();
            // Hide Login page end

        };

        var limitInputEntry = function (value, target, block, msg) {
            var _val = value,
                target = target,
                block = block,
                msg = msg,
                passValid = true;

            if (_val.length > 0) {
                if (_val.match(/[^\u4E00-\u9FA5]/g) == null) {
                    var enLength = 0;
                } else {
                    var enLength = _val.match(/[^\u4E00-\u9FA5]/g).length;
                }
                var total = _val.length * 2 - enLength;
                var chLength = (total - enLength);

                //				console.log('enLength: ' + enLength);
                //				console.log('chLength: ' + chLength);
                if (block == 'en') {
                    if (enLength > 0) {
                        passValid = false;
                    }
                } else {
                    if (chLength > 0) {
                        passValid = false;
                    }
                }
                if (!passValid) {
                    $('.' + target + ' input').parents('.' + target).removeClass('validation-success').addClass('validation-failure').find('.guideFieldError').attr('role', 'alert').text(msg).show();
                } else {
                    $('.' + target + ' input').parents('.' + target).removeClass('validation-failure').find('.guideFieldError').removeAttr('role').text('').hide();
                }
            }
        };

        //		var amountFormatting = function(number) {
        //			var parts = number.toString().split('.');
        //			parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        //			parts.join('.');
        //			parts.toFixed(2);
        //			return parts;
        //		};


        //		var resetInsure = function(){
        //			console.log('clear');
        //			window.parent.$('.selectInsuredContainer label').not('.hidden').remove();
        //			setTimeout(function(){
        //				window.parent.$('.selectInsuredContainer label.hidden').removeClass('hidden');
        //				window.parent.$('.selectInsuredContainer .spouseSelection').removeClass('hidden');
        //				window.parent.$('.selectInsuredContainer .childSelection').removeClass('hidden');
        //				
        //				window.parent.$('.selectInsuredContainer .selectInsuredErrorMsg').text('');
        //				
        //				console.log(customCtrl.currPostion);
        //				window.parent.$('html, body').scrollTop(customCtrl.currPostion);
        //			},500);
        //		};


        var genInsured = function () {
            console.log('gen insured');
            if (typeof customCtrl.spouseObj == 'undefined' || customCtrl.quoteInput.numberOfAdults == 1) {
                window.parent.$('.selectInsuredContainer .spouseSelection').addClass('hidden');
            } else if (customCtrl.quoteInput.numberOfAdults > 1) {
                var _src = window.parent.$('.selectInsuredContainer .spouseSelection .form-radio label:first'),
                    _paste = window.parent.$('.selectInsuredContainer .spouseSelection .form-radio .fieldError.label-error'),
                    adultsInsuredData = customCtrl.spouseObj;

                for (var i = 0; i < adultsInsuredData.length; i++) {
                    _src.clone().insertBefore(_paste);

                    var thisid = window.parent.$('.selectInsuredContainer .spouseSelection .form-radio label:last input').attr('id');
                    window.parent.$('.selectInsuredContainer .spouseSelection .form-radio label:last').attr('for', thisid + i);
                    window.parent.$('.selectInsuredContainer .spouseSelection .form-radio label:last > input').attr('id', thisid + i).attr('index', i).attr('value', i);
                    window.parent.$('.selectInsuredContainer .spouseSelection .form-radio label:last > span.p3').html(adultsInsuredData[i].lastName + ' ' + adultsInsuredData[i].firstName);
                }

                window.parent.$('.selectInsuredContainer .spouseSelection .form-radio label:first-child').addClass('hidden');
            }

            if (typeof customCtrl.childObj == 'undefined' || customCtrl.quoteInput.numberOfChildren == 0) {
                window.parent.$('.selectInsuredContainer .childSelection').addClass('hidden');
            } else if (customCtrl.quoteInput.numberOfChildren > 0) {
                var _src = window.parent.$('.selectInsuredContainer .childSelection .form-checkbox label:first'),
                    _paste = window.parent.$('.selectInsuredContainer .childSelection .form-checkbox .fieldError.label-error'),
                    childInsuredData = customCtrl.childObj;

                for (var i = 0; i < childInsuredData.length; i++) {
                    _src.clone().insertBefore(_paste);

                    var thisid = window.parent.$('.selectInsuredContainer .childSelection .form-checkbox label:last input').attr('id');
                    window.parent.$('.selectInsuredContainer .childSelection .form-checkbox label:last').attr('for', thisid + i);
                    window.parent.$('.selectInsuredContainer .childSelection .form-checkbox label:last > input').attr('id', thisid + i).attr('index', i).attr('value', i);
                    window.parent.$('.selectInsuredContainer .childSelection .form-checkbox label:last > span.p3').html(childInsuredData[i].lastName + ' ' + childInsuredData[i].firstName);
                }

                window.parent.$('.selectInsuredContainer .childSelection .form-checkbox label:first-child').addClass('hidden');
            }

        };

        var girdAdjust = function () {
            $('.tab-pane.active .row-two-col > div > div > .row > div.col-md-6:nth-child(2)').addClass('col-md-4 col-sm-12');
            $('.tab-pane.active .row-two-col > div > div > .row > div.col-md-6:nth-child(4)').addClass('col-md-8 col-sm-12');
            $('.tab-pane.active .row-two-col > div > div > .row > div.col-md-6').removeClass('col-md-6');
            $('.tab-pane.active .rightContainer .leftCol').closest('.col-md-6').addClass('col-sm-6');
            $('.tab-pane.active .rightContainer .rightCol').closest('.col-md-6').addClass('col-sm-6');
        };
        var trimData = function (value) {
            $.trim(value);

            return value;
        };

        var dateToDatepicker = function (inputDate) {
            var getDOB = inputDate;
            var DOBMonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                DOBYY = getDOB.slice(0, 4),
                DOBMM = getDOB.slice(4, 6),
                DOBMM = parseInt(DOBMM) - 1,
                DOBDD = getDOB.slice(6);

            var newDob = DOBDD + '-' + DOBMonths[DOBMM] + '-' + DOBYY;
            return newDob;
        };

        var genPurKey = function () {
            $.ajax({
                type: 'GET',
                dataType: 'json',
                url: customCtrl.apiObj.genPurKeyApi,
                success: function (jdata) {
                    if (!jdata.success || jdata.success === 'true') {
                        customCtrl.purKey = jdata.purchaseKey;
                        customCtrl.loginData.loginArr.purchaseKey = jdata.purchaseKey;
                        sessionStorage.setItem('purKey', jdata.purchaseKey);
                    }
                },
                error: function (xhr, textStatus) {
                    console.log('get purchaseKey error');
                }
            });
        };

        var countAddressLength = function (s) {
            var n = 0;
            for (var i = 0, l = s.length; i < l; i++) {
                var hi = s.charCodeAt(i);
                if (hi < 0x0080) {
                    n += 1;
                } else {
                    //					n+=2;
                    n += 3;
                }
            }
            return n;
        };

        var capData2Preview = function () {
            var pastePreviewInfo = $('.pastePreviewInfo > div > div');
            var capDataContainer = $('.basicInfoSection .capDataContainer');
            var capCorrAddresses = capDataContainer.find('.correspondenceAddressBlock');

            pastePreviewInfo.empty();

            var corrAddress = "<p>" + capCorrAddresses.find('.correspondenceAddressLine1 input').val() + "</p><p>" + capCorrAddresses.find('.correspondenceAddressLine2 input').val() + "</p><p>" + capCorrAddresses.find('.correspondenceAddressLine3 input').val() + "</p><p>" + capCorrAddresses.find('.correspondenceAddressLine4 input').val() + "</p>";

            capDataContainer.clone().appendTo(pastePreviewInfo);
            pastePreviewInfo.find('input').each(function () {
                var value = $(this).val();
                $(this).parent().html(value);
            });
            pastePreviewInfo.find('select').each(function () {
                var value = $(this).find('option:selected').text();
                $(this).parent().html(value);
            });
            pastePreviewInfo.find('.guideCheckBox .guideRadioButtonGroupItems').each(function () {
                var value = $(this).find('.guideItemSelected label').text();
                $(this).html(value);
            });
            pastePreviewInfo.find('.datePicker').each(function () {
                $(this).find('label').removeAttr('for');
            });
            pastePreviewInfo.find('.correspondenceAddressBlock .correspondenceAddressLine1 label p').html($('.basicInfoSection .corrAddressTit h5').text());
            pastePreviewInfo.find('.correspondenceAddressBlock .correspondenceAddressLine1 .textField').html(corrAddress);
        };

        var getAgentInfo = function () {
            var getAgentInfoArray = {
                "userId": "",
                "sessionId": "",
                "country": "hk",
                "language": customCtrl.formLanguage,
                "partyId": "",
                "purchaseKey": customCtrl.purKey,
                "agentCode": customCtrl.getProductSrcParameter.agentCode
            }

            $.ajax({
                url: customCtrl.apiObj.getAgentInfo,
                type: 'POST',
                data: JSON.stringify(getAgentInfoArray),
                dataType: 'json',
                contentType: 'application/json'
            }).done(function (jdata) {
                if (jdata.success == 'true') {
                    nameOfCardholder.value = jdata.data.agentName;
                    //					nameOfCardholder.enabled = false;
                }
            }).fail(function (xhr, textStatus) {
                console.log('fail', textStatus);
            });
        }

        var getTravelQuotation = function (callback) {
            callback = typeof callback !== "undefined" ? callback : null;

            customCtrl.quoteData.purchaseKey = customCtrl.purKey;
            customCtrl.quoteData.authToken = customCtrl.loginData.loginArr.authToken;

            if (ownerLastNmInEng.value !== null && ownerFirstNmInEng.value !== null && ownerGender.value !== null && ownerDob.value !== null && ownerHKIDNum.value !== null) {
                customCtrl.quoteData.customerPIIData = {
                    firstName: ownerFirstNmInEng.value,
                    lastName: ownerLastNmInEng.value,
                    gender: ownerGender.value,
                    dob: customCtrl.transDateToBackend(ownerDob.value),
                    hkid: ownerHKIDNum.value
                }
            } else {
                customCtrl.quoteData.customerPIIData = {
                    firstName: null,
                    lastName: null,
                    gender: null,
                    dob: null,
                    hkid: null
                }
            }

            $.ajax({
                url: customCtrl.apiObj.getTravelQuotationApi,
                type: 'POST',
                data: JSON.stringify(customCtrl.quoteData),
                dataType: 'json',
                contentType: 'application/json'
            }).done(function (jdata) {
                if (jdata.success !== 'false' && jdata.success !== false) {

                    // Hide / show agent email
                    if (jdata.data.agentEmail && jdata.data.agentEmail.replace(/\s/g, '') != '') {
                        $('.agentEmailTitle').show();
                        $('.agentEmail').show();
                        $('.agentEmail')[0].innerText = jdata.data.agentEmail;
                    } else {
                        $('.agentEmailTitle').hide();
                        $('.agentEmail').hide();
                    }

                    console.log('done', jdata.data);
                    //					var coveragesList = jdata.quotations[0].coverages;
                    //					coveragesList.forEach(function(element, key){
                    //						var priceObj = {
                    //							"componentCode": element.coverageName,
                    //							"price": element.coveragePremium
                    //						};
                    //						priceList.push(priceObj);
                    //					});

                    sessionStorage.setItem('returnQuotation', JSON.stringify(jdata.data));
                    customCtrl.returnQuotation = jdata.data;

                    if ((customCtrl.returnQuotation.activeTravelPolicyNo !== '' && customCtrl.returnQuotation.activeTravelPolicyNo !== null)) {
                        beneficiaryInfo.visible = false;

                    } else {
                        beneficiaryInfo.visible = true;
                    }

                    if ((customCtrl.returnQuotation.activeTravelPolicyNo !== '' && customCtrl.returnQuotation.activeTravelPolicyNo !== null) || window.parent.aiaIshopPageFunction.sourceHandle.isiEngage()) {
                        optOut.visible = false;
                    } else {
                        optOut.visible = true;
                    }


                    window.parent.$('.addonBenefit').html('').hide();

                    for (var i = 0; i < jdata.data.quotations[0].coverages.length; i++) {
                        if (jdata.data.quotations[0].coverages[i].coverageType == 'p') {
                            window.parent.$('.product-details-bar .breakdown-list .totalPremium .amount').text(window.parent.aiaIshopPageFunction.formatHelper.numberFormat(jdata.data.quotations[0].coverages[i].coveragePremium, 2));
                        } else {
                            for (var j = 0; j < customCtrl.quoteInput.coverageList.length; j++) {
                                if (jdata.data.quotations[0].coverages[i].coverageName == customCtrl.quoteInput.coverageList[j].coverageName) {
                                    window.parent.$('.template .row.beneItem').clone().appendTo('.product-details-bar .addonBenefit');

                                    window.parent.$('.product-details-bar .addonBenefit .row.beneItem:last-child .payment-descript').text(customCtrl.quoteInput.coverageList[j].fullName);
                                    window.parent.$('.product-details-bar .addonBenefit .row.beneItem:last-child .amount').text(window.parent.aiaIshopPageFunction.formatHelper.numberFormat(jdata.data.quotations[0].coverages[i].coveragePremium, 2));

                                    window.parent.$('.addonBenefit').show();
                                }
                            }
                        }
                    }

                    window.parent.$('.product-details-bar .travelCredit').remove();
                    window.parent.$('.product-details-bar .promoDiscount').remove();
                    $('.promoCodePanel .promoMsg .guideFieldError').html('');
                    $('.promoCodePanel .promoErrMsg .guideFieldError').html('');


                    if ((customCtrl.returnQuotation.activeTravelPolicyNo == '' || customCtrl.returnQuotation.activeTravelPolicyNo == null) && customCtrl.returnQuotation.hasOtherActivePolicy == 'Y') {
                        otherActivePolicyReminder.visible = true;
                        otherActivePolicyReminderDeclaration.visible = true;
                        otherActivePolicyReminderPreview.visible = true;
                        otherActivePolicyReminderPayment.visible = true;

                        $('.otherActivePolicyReminder .text-wrapper p, .otherActivePolicyReminderDeclaration .text-wrapper p, .otherActivePolicyReminderPreview .text-wrapper p').text(customCtrl.errorMsg.hasOtherActivePolicy[customCtrl.formLanguage]);

                        $('.otherActivePolicyReminderPayment p').text('* ' + customCtrl.errorMsg.hasOtherActivePolicy4Payment[customCtrl.formLanguage]);
                    }

                    customCtrl.promoCodeMsg = '';
                    if (jdata.data.quotations[0].promoStatusCode == '200') {
                        if (jdata.data.quotations[0].promoTransactionAmount !== 0) {
                            window.parent.$('.template .row.promoDiscount').clone().appendTo('.product-details-bar .breakdown-list');

                            window.parent.$('.product-details-bar .promoDiscount .amount').text(window.parent.aiaIshopPageFunction.formatHelper.numberFormat(Math.abs(jdata.data.quotations[0].promoTransactionAmount), 2));

                            customCtrl.promoCodeMsg = customCtrl.errorMsg.promoCodeMsg[customCtrl.formLanguage][0][0] + customCtrl.quoteData.promoCode + customCtrl.errorMsg.promoCodeMsg[customCtrl.formLanguage][0][1];
                        } else if (jdata.data.quotations[0].plan.coiPayMode == 'NET') {
                            window.parent.$('.template .row.promoDiscount').clone().appendTo('.product-details-bar .breakdown-list');

                            window.parent.$('.product-details-bar .promoDiscount .payment-descript').html(customCtrl.langText.payGrossNet[customCtrl.formLanguage]);

                            window.parent.$('.product-details-bar .promoDiscount .amount').text(window.parent.aiaIshopPageFunction.formatHelper.numberFormat(jdata.data.quotations[0].commssionAmount, 2));
                        }

                        window.parent.$('.product-details-bar .promoCodeMsg').html(customCtrl.promoCodeMsg);
                        $('.promoCodePanel .promoMsg .guideFieldError').html(customCtrl.promoCodeMsg);
                    } else {
                        customCtrl.promoCodeErr = customCtrl.errorMsg.promoCodeMsg[customCtrl.formLanguage][2][0] + customCtrl.quoteData.promoCode + customCtrl.errorMsg.promoCodeMsg[customCtrl.formLanguage][2][1];

                        //						if(jdata.data.quotations[0].promoStatusCode == '301'){
                        //							customCtrl.promoCodeErr = customCtrl.quoteData.promoCode +' ('+ jdata.data.quotations[0].promoStatusCode+')';
                        //						} else if(jdata.data.quotations[0].promoStatusCode == '302'){
                        //							customCtrl.promoCodeErr = customCtrl.quoteData.promoCode +' ('+ jdata.data.quotations[0].promoStatusCode+')';
                        //						} else if(jdata.data.quotations[0].promoStatusCode == '303'){
                        //							customCtrl.promoCodeErr = customCtrl.quoteData.promoCode +' ('+ jdata.data.quotations[0].promoStatusCode+')';
                        //						}

                        window.parent.$('.product-details-bar .promoCodeMsg').html(customCtrl.promoCodeErr);
                        $('.promoCodePanel .promoErrMsg .guideFieldError').html(customCtrl.promoCodeErr);

                        //						customCtrl.quoteData.promoCode = customCtrl.prevSuccessCode;
                        customCtrl.quoteData.promoCode = '';
                    }


                    // window.parent.$('.product-details-bar .product-info .total-cost .amount, .product-details-bar .total-initial-payment .amount').text(customCtrl.amountFormatting(jdata.quotations[0].initialPolicyCost));
                    window.parent.$('.product-details-bar .product-info .total-cost .amount, .product-details-bar .total-initial-payment .amount').text(window.parent.aiaIshopPageFunction.formatHelper.numberFormat(jdata.data.quotations[0].paymentGatewayTransactionAmount, 2));

                    window.parent.$('.product-details-bar .breakdown-list .levyCharge .amount').text(window.parent.aiaIshopPageFunction.formatHelper.numberFormat(jdata.data.quotations[0].levyAmount, 2));

                    if (Math.abs(jdata.data.quotations[0].creditTransactionAmount) > 0) {
                        window.parent.$('.template .row.travelCredit').clone().appendTo('.product-details-bar .breakdown-list');

                        window.parent.$('.product-details-bar .breakdown-list .travelCredit .amount').text(window.parent.aiaIshopPageFunction.formatHelper.numberFormat(Math.abs(jdata.data.quotations[0].creditTransactionAmount), 2));
                    }

                    sessionStorage.setItem('quoteData', JSON.stringify(customCtrl.quoteData));

                    if ($('.doPayment').closest('.tab-pane').hasClass('active')) {
                        $('.doPayment .paymentDetails .product-details-info').empty();

                        $(window.parent.document).find('.product-details-bar .product-details-info > div').clone().appendTo('.doPayment .paymentDetails .product-details-info');
                    }

                    //					if( (typeof customCtrl.quoteData.staffEmail !== 'undefined' && customCtrl.quoteData.staffEmail !== '') || window.parent.aiaIshopPageFunction.sourceHandle.isiEngage() ){
                    //						promoCodeSection.visible = false;
                    //
                    //						window.parent.$('.product-details-bar .product-details-info .promoDiscount .payment-descript span, .product-details-bar .product-details-info .promoCodeMsg').remove();
                    //					}
                    if (window.parent.aiaIshopPageFunction.sourceHandle.isiEngage()) {
                        $('.login-block-app-form').addClass('hidden');

                        if (customCtrl.quoteData.plans[0].coiPayMode !== 'GROSS') {
                            promoCodeSection.visible = false;

                            window.parent.$('.product-details-bar .product-details-info .promoDiscount .payment-descript span, .product-details-bar .product-details-info .promoCodeMsg').remove();
                        }
                    } else if (typeof customCtrl.quoteData.staffEmail !== 'undefined' && customCtrl.quoteData.staffEmail !== '') {
                        promoCodeSection.visible = false;

                        window.parent.$('.product-details-bar .product-details-info .promoDiscount .payment-descript span, .product-details-bar .product-details-info .promoCodeMsg').remove();

                        relationshipWithTheEmployee.visible = true;

                        if (!!sessionStorage.buy4yrself && sessionStorage.buy4yrself == 'N') {
                            $('.staffBuyForOwn.guideRadioButtonItem label').eq(1).trigger('click');
                        }
                    }

                    if (callback) {
                        callback();
                    }
                } else {
                    if (jdata.code == 'pc2001') {
                        window.top.location.href = window.top.location.href.replace('/application-form', '');
                    }
                }
            }).fail(function (xhr, textStatus) {
                console.log('fail', textStatus);
            });
        };

        var travelLogin = function () {
            var uid = customCtrl.loginData.loginInfo.uid;
            var password = customCtrl.loginData.loginInfo.password;
            var errorSelector = $('.login-msg');

            errorSelector.removeClass('fieldError label-error').text('');
            window.parent.aiaIshopPageFunction.account.login({
                "loginData": {
                    "uid": uid,
                    "password": password
                },
                successCallback: function (data) {
                    var jwt = data.jwt;

                    customCtrl.loginData.loginArr.authToken = jwt.access_token;
                    customCtrl.loginData.loginArr.purchaseKey = customCtrl.purKey;
                    customCtrl.loginData.loginArr.userId = customCtrl.loginData.loginInfo.uid;

                    window.parent.$('ul.dropdown-menu.menuNav-dropdown-menu > li:last-of-type, ul.nav.promomenu-nav > li:last-of-type').removeClass('hide');

                    customCtrl.getTravelClientInfo();
                },
                failCallback: function (errorMessage) {
                    errorSelector.addClass('fieldError label-error').html(errorMessage);
                },
                nonLFEBCallback: function (errorMessage) {
                    errorSelector.addClass('fieldError label-error').html(errorMessage);
                },
                emptyCallback: function (errorMessage) {
                    errorSelector.addClass('fieldError label-error').html(errorMessage);
                }
            });
        };

        var getTravelClientInfo = function () {
            if (customCtrl.getProductSrcParameter !== false) {
                for (var key in customCtrl.getProductSrcParameter) {
                    var value = customCtrl.getProductSrcParameter[key];
                    customCtrl.loginData.loginArr[key] = value;
                }
            }

            $.ajax({
                url: customCtrl.apiObj.getTravelClientInfoApi,
                type: 'POST',
                data: JSON.stringify(customCtrl.loginData.loginArr),
                dataType: 'json',
                contentType: 'application/json'
            }).done(function (jdata) {
                if (jdata.success == 'true') {

                    console.log('getTravelClientInfo success');
                    console.log(jdata);
                    if (jdata.data) {


                        sessionStorage.setItem('clientData', JSON.stringify(jdata.data));

                        if (jdata.code == 'tc2001' || jdata.code == 'pc2001') {
                            window.top.location.href = window.top.location.href.replace('/application-form', '');
                        } else {
                            customCtrl.clientData = jdata.data;
                            //					customCtrl.loginData.completeLogin[0]=true;

                            window.aiaPrevClick(this.panel, 'prevItem');

                            customCtrl.getCompanionsData();
                            customCtrl.getTravelQuotation();
                            customCtrl.filltravelClientData();
                        }
                    } else {
                        sessionStorage.removeItem('clentData');
                        sessionStorage.removeItem('jwt');
                        sessionStorage.removeItem('clientAccountOwnership');
                    }
                } else {
                    if (jdata.code == 'bl4025') {
                        sessionStorage.removeItem('jwt');
                        sessionStorage.removeItem('clientData');
                        customCtrl.clientData = '';
                        customCtrl.loginData.loginArr.authToken = null;

                        $('.clientInfoFailMsg .guideFieldError').html(customCtrl.errorMsg.getClientInfoErrBL4025[customCtrl.formLanguage]);

                    } else if (jdata.code == 'bl4021') {
                        sessionStorage.removeItem('jwt');
                        sessionStorage.removeItem('clientData');
                        customCtrl.clientData = '';
                        customCtrl.loginData.loginArr.authToken = '';

                        $('.clientInfoFailMsg .guideFieldError').html(customCtrl.errorMsg.getClientInfoErrBL4021[customCtrl.formLanguage][0] + jdata.code + ' / ' + customCtrl.purKey + customCtrl.errorMsg.getClientInfoErrBL4021[customCtrl.formLanguage][1]);

                    } else if (jdata.code == 'tc2001' || jdata.code == 'pc2001') {
                        sessionStorage.setItem('clientData', JSON.stringify(jdata.data));
                        window.top.location.href = window.top.location.href.replace('/application-form', '');
                    }
                }
            });
        };

        var getCompanionsData = function () {
            if (customCtrl.quoteInput.travelers == 'family') {

                if (customCtrl.quoteInput.numberOfAdults > 1) {
                    otherTravelersPanel.visible = true;
                    spouseContainer.visible = true;
                }
                if (customCtrl.quoteInput.numberOfChildren > 0) {
                    otherTravelersPanel.visible = true;

                    if (customCtrl.quoteInput.numberOfAdults == 1) {
                        $('.childItem01.childItem .line-divider').hide();
                    }

                    if (customCtrl.quoteInput.numberOfChildren > 1) {
                        $('.childItem.insuredSelectDiv .childCounter').text('1');
                    }
                    for (var i = 1; i <= customCtrl.quoteInput.numberOfChildren; i++) {
                        if (i < 10) {
                            (eval('childItem0' + i)).visible = true;
                        } else {
                            (eval('childItem' + i)).visible = true;
                        }
                    }
                }

                if (typeof customCtrl.clientData !== 'undefined' && (typeof customCtrl.clientData.companions !== 'undefined' && customCtrl.clientData.companions !== null && customCtrl.clientData.companions.length > 0)) {

                    for (var i = 0; i < customCtrl.clientData.companions.length; i++) {
                        if (customCtrl.clientData.companions[i].relationship == 'S') {
                            if (typeof customCtrl.spouseObj == 'undefined') {
                                customCtrl.spouseObj = [];
                                customCtrl.spouseObj.push(customCtrl.clientData.companions[i]);
                            } else {
                                customCtrl.spouseObj.push(customCtrl.clientData.companions[i]);
                            }
                        } else if (customCtrl.clientData.companions[i].relationship == 'C') {
                            if (typeof customCtrl.childObj == 'undefined') {
                                customCtrl.childObj = [];
                                customCtrl.childObj.push(customCtrl.clientData.companions[i]);
                            } else {
                                customCtrl.childObj.push(customCtrl.clientData.companions[i]);
                            }
                        }
                    }

                    var showSelectPanel = false;
                    console.log(customCtrl.spouseObj, customCtrl.childObj);

                    if (typeof customCtrl.spouseObj !== 'undefined' && customCtrl.quoteInput.numberOfAdults > 1) {
                        showSelectPanel = true;
                        customCtrl.selectSpouse = true;

                        customCtrl.spouseObj.sort(function (a, b) {
                            (a.lastName > b.lastName) ? 1 : (a.lastName === b.lastName) ? ((a.firstName > b.firstName) ? 1 : -1) : -1
                        });
                    }

                    if (typeof customCtrl.childObj !== 'undefined' && customCtrl.quoteInput.numberOfChildren > 0) {
                        showSelectPanel = true;
                        customCtrl.selectChild = true;

                        customCtrl.childObj.sort(function (a, b) {
                            (a.lastName > b.lastName) ? 1 : (a.lastName === b.lastName) ? ((a.firstName > b.firstName) ? 1 : -1) : -1
                        });
                    }

                    if (showSelectPanel) {
                        otherTravelersSelectSection.visible = true;

                        $('.selectInsured button').on('click', function () {
                            customCtrl.currPostion = $(window.parent.document).scrollTop();
                            $(window.parent.document).find('.triggerSelectInsured button').trigger('click');

                            var showMsg = false;
                            if (typeof customCtrl.spouseObj !== 'undefined' && !showMsg) {
                                for (var i = 0; i < $('.spouseItem .toUpperCase input').length; i++) {
                                    if ($('.spouseItem .toUpperCase input').eq(i).val() !== '') {
                                        showMsg = true;

                                        break;
                                    }
                                }
                            }
                            if (typeof customCtrl.childObj !== 'undefined' && !showMsg) {
                                for (var i = 0; i < customCtrl.quoteInput.numberOfChildren; i++) {
                                    for (var u = 0; u < $('.childItem').eq(i).find('.toUpperCase input').length; u++) {
                                        if ($('.childItem').eq(i).find('.toUpperCase input').eq(u).val() !== '') {
                                            showMsg = true;

                                            break;
                                        }
                                    }
                                }
                            }

                            if (showMsg) {
                                window.parent.$('.selectInsuredContainer .contextual-alert.hidden').removeClass('hidden');
                            } else {
                                window.parent.$('.selectInsuredContainer .contextual-alert').addClass('hidden');
                            }

                            window.parent.$('.selectInsuredContainer .selectInsuredErrorMsg').text('');
                            //								genInsured();
                        });

                        genInsured();
                    }

                    customCtrl.selectInsuredModelId = window.parent.$('.selectInsuredContainer').closest('.modal.fade.aia-modal').attr('id');

                    window.parent.$('.btnConfirmInsured button').on('click', function () {
                        console.log('pick insured');

                        var _pass = false;
                        var _checkbErr = false;

                        var childIdx = [];
                        var spouseIdx = window.parent.$('.selectInsuredContainer .spouseSelection .form-radio input[name="selectInsured"]:checked').val();

                        if (typeof spouseIdx !== 'undefined') {
                            _pass = true;
                        }


                        if (window.parent.$('.selectInsuredContainer .childSelection label').not('.hidden').find('input[name="selectInsured"]:checked').length > customCtrl.quoteInput.numberOfChildren) {
                            _pass = true;
                            _checkbErr = false;
                        } else {
                            _checkbErr = true;

                            for (var i = 0; i < window.parent.$('.selectInsuredContainer .childSelection label').not('.hidden').length; i++) {
                                var value = window.parent.$('.selectInsuredContainer .childSelection label').not('.hidden').eq(i).find('input[name="selectInsured"]:checked').val();

                                if (typeof value !== 'undefined') {
                                    childIdx.push(value);
                                    _pass = true;
                                }
                            }
                        }

                        if (!_pass) {
                            window.parent.$('.selectInsuredContainer .selectInsuredErrorMsg').text(customCtrl.errorMsg.selectInsuredErrMsg[customCtrl.formLanguage][0]);
                        } else if (!_checkbErr) {
                            window.parent.$('.selectInsuredContainer .selectInsuredErrorMsg').text(customCtrl.errorMsg.selectInsuredErrMsg[customCtrl.formLanguage][1]);
                        } else {
                            if (customCtrl.selectSpouse && typeof spouseIdx !== 'undefined') {
                                console.log(customCtrl.spouseObj);
                                console.log(customCtrl.spouseObj[spouseIdx]);
                                var src = customCtrl.spouseObj[spouseIdx];

                                spouseLastNmInEng.value = src.lastName;
                                spouseFirstNmInEng.value = src.firstName;
                                spouseDob.value = dateToDatepicker(src.dob);
                                spouseGender.value = src.gender;
                                if (src.hkid !== null) {
                                    spouseHkidNum.value = src.hkid;
                                } else {
                                    if ($('.spouseNonPermanentHkid input:checked').length < 1) {
                                        $('.guideCheckBoxItem.spouseNonPermanentHkid label').trigger('click');
                                    }

                                    spousePassportNum.value = src.passportNo;
                                    spousePassportExpiryDate.value = dateToDatepicker(src.passportExpiryDate);
                                }
                            }

                            if (customCtrl.selectChild && childIdx.length > 0) {
                                console.log(customCtrl.childObj);

                                for (var i = 0; i < childIdx.length; i++) {
                                    if (i < 10) {
                                        var instanceId = '0' + (i + 1);
                                    }
                                    var src = customCtrl.childObj[childIdx[i]];

                                    //										console.log(childIdx[i-1]);
                                    //										console.log(customCtrl.childObj[childIdx[i]]);
                                    console.log(src);

                                    (eval('childLastNmInEng' + instanceId)).value = src.lastName;
                                    (eval('childFirstNmInEng' + instanceId)).value = src.firstName;
                                    (eval('childDob' + instanceId)).value = dateToDatepicker(src.dob);
                                    (eval('childGender' + instanceId)).value = src.gender;
                                    if (src.hkid !== null) {
                                        (eval('childHkidNum' + instanceId)).value = src.hkid;
                                    } else {
                                        if ($('.childItem' + instanceId).find('.childNonPermanentHkid input:checked').length < 1) {
                                            $('.childItem' + instanceId).find('.guideCheckBoxItem.childNonPermanentHkid label').trigger('click');
                                        }

                                        (eval('childPassportNum' + instanceId)).value = src.passportNo;
                                        (eval('childPassportExpiryDate' + instanceId)).value = dateToDatepicker(src.passportExpiryDate);
                                    }
                                }
                            }

                            window.parent.$('#' + customCtrl.selectInsuredModelId + ' button[data-dismiss="modal"]').trigger('click');
                        }
                    });
                }
            }
        }

        var filltravelClientData = function () {
            console.log('prefill');

            prefilledShownText.visible = true;

            // hidden login box
            $('.login-block-app-form').hide();

            if (customCtrl.clientData.companionPolNo !== '' && customCtrl.clientData.companionPolNo !== null) {
                activeTravelAlert.visible = true;
                $('.activeTravelAlert .text-wrapper h6').text(customCtrl.clientData.companionPolNo);
            }

            customCtrl.isAIACustomer = 'Y';

            //			customCtrl.goInfomationPage();
            //			customCtrl.goStep1progress();
            console.log(customCtrl.clientData);

            //			customCtrl.ownerInfo={};

            sessionStorage.setItem('DOB', dateToDatepicker(customCtrl.clientData.dob));

            var ownGender = '';
            //			customCtrl.ownerInfo.gender = customCtrl.clientData.gender;
            //			if(customCtrl.ownerInfo.gender == 'F'){
            if (customCtrl.clientData.gender == 'F') {
                ownGender = customCtrl.langText.female[customCtrl.formLanguage];
            } else {
                ownGender = customCtrl.langText.male[customCtrl.formLanguage];
            }

            if (sessionStorage.clientAccountOwnership !== undefined && JSON.parse(sessionStorage.clientAccountOwnership).hasCcId == 'false') {
                if (ownGender !== '') {
                    ownerGender.value = customCtrl.clientData.gender;
                }

                ownerDob.value = dateToDatepicker(customCtrl.clientData.dob);

                if (customCtrl.clientData.lastName && customCtrl.clientData.lastName.length > 0) {
                    ownerLastNmInEng.value = customCtrl.clientData.lastName;
                }

                if (customCtrl.clientData.firstName && customCtrl.clientData.firstName.length > 0) {
                    ownerFirstNmInEng.value = customCtrl.clientData.firstName;
                }

                if (customCtrl.clientData.hkid && customCtrl.clientData.hkid.length > 0) {
                    ownerHKIDNum.value = customCtrl.clientData.hkid;
                }
            } else {
                if (ownGender !== '') {
                    $('.ownerGender .guideRadioButtonGroupItems').html(ownGender).removeClass('guideRadioButtonGroupItems');
                    ownerGender.validationsDisabled = true;
                    ownerGender.value = customCtrl.clientData.gender;
                }

                $('.ownerDob input').parent().html(dateToDatepicker(customCtrl.clientData.dob));
                ownerDob.validationsDisabled = true;
                ownerDob.value = dateToDatepicker(customCtrl.clientData.dob);

                if (customCtrl.clientData.lastName && customCtrl.clientData.lastName.length > 0) {
                    $('.ownerLastNmInEng input').parent().html(customCtrl.clientData.lastName);
                    ownerLastNmInEng.validationsDisabled = true;
                    ownerLastNmInEng.value = customCtrl.clientData.lastName;
                }

                if (customCtrl.clientData.firstName && customCtrl.clientData.firstName.length > 0) {
                    $('.ownerFirstNmInEng input').parent().html(customCtrl.clientData.firstName);
                    ownerFirstNmInEng.validationsDisabled = true;
                    ownerFirstNmInEng.value = customCtrl.clientData.firstName;
                }

                if (customCtrl.clientData.hkid && customCtrl.clientData.hkid.length > 0) {
                    $('.ownerHKIDNum input').parent().html(customCtrl.clientData.hkid);
                    ownerHKIDNum.validationsDisabled = true;
                    ownerHKIDNum.value = customCtrl.clientData.hkid;
                }
            }

            if (customCtrl.clientData.mobile.number && customCtrl.clientData.mobile.number.length > 0) {
                ownerMobileNum.value = customCtrl.clientData.mobile.number;
            }
            if (customCtrl.clientData.email && customCtrl.clientData.email.length > 0) {
                ownerEmailAddress.value = customCtrl.clientData.email;
            }

            correspondenceAddressLine1.value = customCtrl.clientData.correspondenceAddress.addressLine1;
            correspondenceAddressLine2.value = customCtrl.clientData.correspondenceAddress.addressLine2;
            correspondenceAddressLine3.value = customCtrl.clientData.correspondenceAddress.addressLine3;
            correspondenceAddressLine4.value = customCtrl.clientData.correspondenceAddress.addressLine4;
            district.value = customCtrl.clientData.correspondenceAddress.district;

            //			console.log(customCtrl.loginData.skipLogin);

            $('.prefill-hidden').hide();
        };

        var modifyDatePicker = function (minAge, maxAge, elementName) {
            console.log('modifyDatePicker start');
            var validDate = new Date();
            var monthsNm = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var minDate = new Date(validDate.getTime());
            minDate.setFullYear(validDate.getFullYear() - minAge);
            // birthdayCheck=false;

            var minYY = minDate.getFullYear();
            var minMM = minDate.getMonth();
            minMM = monthsNm[minMM];
            var minDD = minDate.getDate();
            minDate = minDD + '-' + minMM + '-' + minYY;

            var maxDate = new Date(validDate.getTime());
            maxDate.setFullYear(validDate.getFullYear() - maxAge - 1);
            maxDate.setDate(validDate.getDate() + 1);
            var maxYY = maxDate.getFullYear();
            var maxMM = maxDate.getMonth();
            maxMM = monthsNm[maxMM];
            var maxDD = maxDate.getDate();
            maxDate = maxDD + '-' + maxMM + '-' + maxYY;

            (eval(elementName)).value = minDate;

            $('.' + elementName + ' input').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                locale: {
                    format: 'DD-MMM-YYYY',
                    "daysOfWeek": [
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat"
                    ]
                },
                minDate: maxDate,
                maxDate: minDate,
                startDate: minDate
            });
        };

        var modifyPassportDateRange = function (elementName) {
            console.log('modifyDatePicker start');
            var validDate = new Date();
            var monthsNm = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            //			var minDate = new Date(validDate.getTime());
            var tomorrow = new Date(validDate.getTime() + 24 * 60 * 60 * 1000);
            // birthdayCheck=false;

            var minYY = tomorrow.getFullYear();
            var minMM = tomorrow.getMonth();
            minMM = monthsNm[minMM];
            var minDD = tomorrow.getDate();
            tomorrow = minDD + '-' + minMM + '-' + minYY;

            var maxDate = new Date(validDate.getTime() + 24 * 60 * 60 * 1000 * 20000);
            var maxYY = maxDate.getFullYear();
            var maxMM = maxDate.getMonth();
            maxMM = monthsNm[maxMM];
            var maxDD = maxDate.getDate();
            maxDate = maxDD + '-' + maxMM + '-' + maxYY;

            (eval(elementName)).value = tomorrow;

            $('.' + elementName + ' input').daterangepicker({
                singleDatePicker: true,
                showDropdowns: true,
                locale: {
                    format: 'DD-MMM-YYYY',
                    "daysOfWeek": [
                        "Sun",
                        "Mon",
                        "Tue",
                        "Wed",
                        "Thu",
                        "Fri",
                        "Sat"
                    ]
                },
                minDate: tomorrow,
                maxDate: maxDate,
                startDate: tomorrow
            });
        };

        var transDateToBackend = function (inputDate) {
            var inputDate = inputDate.split('-');
            var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            var month;
            var date = inputDate[0];
            for (i = 0; i < monthNames.length; i++) {
                if (inputDate[1] == monthNames[i]) {
                    month = i + 1;
                    month = month.toString();
                }
            }
            if (date.length < 2) {
                date = '0' + date;
            }
            if (month.length < 2) {
                month = '0' + month;
            }
            inputDate = inputDate[2] + month + date;

            return inputDate;
        };

        var checkID = function (elementName) {
            console.log('checkID start');

            var strValidChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var str = $('.' + elementName + ' input').val();

            if (str.length < 8)
                return false;

            if (str.charAt(str.length - 3) == '(' && str.charAt(str.length - 1) == ')')
                str = str.substring(0, str.length - 3) + str.charAt(str.length - 2);

            str = str.toUpperCase();

            var hkidPat = /^([A-Z]{1,2})([0-9]{6})([A0-9])$/;
            var matchArray = str.match(hkidPat);

            var hkidPat2 = /^([A-Z]{1,2})([0-9]{6})([(])([A0-9])([)])$/;
            var matchArray2 = str.match(hkidPat2);

            if (matchArray == null && matchArray2 == null)
                return false;

            var charPart = matchArray[1];
            var numPart = matchArray[2];
            var checkDigit = matchArray[3];

            var checkSum = 0;
            if (charPart.length == 2) {
                checkSum += 9 * (10 + strValidChars.indexOf(charPart.charAt(0)));
                checkSum += 8 * (10 + strValidChars.indexOf(charPart.charAt(1)));
            } else {
                checkSum += 9 * 36;
                checkSum += 8 * (10 + strValidChars.indexOf(charPart));
            }

            for (var i = 0, j = 7; i < numPart.length; i++ , j--)
                checkSum += j * numPart.charAt(i);

            var remaining = checkSum % 11;
            var verify = remaining == 0 ? 0 : 11 - remaining;

            return verify == checkDigit || (verify == 10 && checkDigit == 'A');
        };

        var scrollToError = function () {
            if ($('.tab-pane.active .validation-failure').length > 0) {
                $('.tab-pane.active .validation-failure').eq(0)
                $(window.parent.document).scrollTop($('.tab-pane.active .validation-failure').eq(0).offset().top - 10);
            }
        };

        var goInfomationPage = function () {
            window.guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].basicInfoSection[0]", true);

            customCtrl.girdAdjust();
        };

        var goDeclarationPage = function () {
            window.guideBridge.setFocus("guide[0].guide1[0].guideRootPanel[0].formContainer[0].declarationSection[0]", true);

            customCtrl.girdAdjust();
        };

        var checkExistingCustomer = function (callback) {
            callback = typeof callback !== "undefined" ? callback : null;

            var checkExistingCustomerData = {
                purchaseKey: customCtrl.purKey,
                tripStartDate: customCtrl.quoteData.tripStartDate,
                tripEndDate: customCtrl.quoteData.tripEndDate,
                checkMode: 'C',
                authToken: '',
                customer: {
                    firstName: customCtrl.preSubmitTempData.ownerFirstNmInEng,
                    lastName: customCtrl.preSubmitTempData.ownerLastNmInEng,
                    gender: customCtrl.preSubmitTempData.ownerGender,
                    dob: customCtrl.transDateToBackend(customCtrl.preSubmitTempData.ownerDob),
                    hkid: customCtrl.preSubmitTempData.ownerHKIDNum
                }
            };

            if (customCtrl.getProductSrcParameter !== false) {
                for (var key in customCtrl.getProductSrcParameter) {
                    var value = customCtrl.getProductSrcParameter[key];
                    checkExistingCustomerData[key] = value;
                }
            }

            console.log(checkExistingCustomerData);

            $.ajax({
                url: customCtrl.apiObj.checkExistingCustomerApi,
                type: 'POST',
                data: JSON.stringify(checkExistingCustomerData),
                dataType: 'json',
                contentType: 'application/json'
            }).done(function (jdata) {

                console.log(jdata);

                customCtrl.checkExistingCustomerResponse = jdata;

                if (callback) {
                    callback();
                }
            });
        };


        var saveTravelAppForm = function (callback) {
            callback = typeof callback !== "undefined" ? callback : null;

            customCtrl.saveFormArray = {
                "userId": "",
                "sessionId": "",
                "country": "hk",
                "language": customCtrl.formLanguage,
                "partyId": "",
                "purchaseKey": customCtrl.purKey,
                "travelAppForm": {
                    "policyOwner": {
                        "firstName": customCtrl.preSubmitTempData.ownerFirstNmInEng,
                        "lastName": customCtrl.preSubmitTempData.ownerLastNmInEng,
                        "dob": customCtrl.transDateToBackend(customCtrl.preSubmitTempData.ownerDob),
                        "hkid": customCtrl.preSubmitTempData.ownerHKIDNum,
                        "gender": customCtrl.preSubmitTempData.ownerGender,
                        "mobile": {
                            "countryCode": customCtrl.preSubmitTempData.ownerTelCodeNum,
                            "number": customCtrl.preSubmitTempData.ownerMobileNum
                        },
                        "email": customCtrl.preSubmitTempData.ownerEmailAddress,
                        "correspondenceAddress": {
                            "addressLine1": customCtrl.preSubmitTempData.correspondenceAddressLine1,
                            "addressLine2": customCtrl.preSubmitTempData.correspondenceAddressLine2,
                            "addressLine3": customCtrl.preSubmitTempData.correspondenceAddressLine3,
                            "addressLine4": customCtrl.preSubmitTempData.correspondenceAddressLine4,
                            "addressLine5": null,
                            "country": "HK",
                            "countryCode": "852",
                            "district": customCtrl.preSubmitTempData.district
                        },
                        "companions": []
                    },
                    "beneficiary": {
                        "ownEstate": "Y",
                        "beneficiaries": []
                    },
                    "optOut": "Y",
                    "planCode": customCtrl.returnQuotation.quotations[0].plan.planCode,
                    "coverages": [],
                    "aiaCustomer": customCtrl.isAIACustomer,
                    "aemPageLang": customCtrl.formLanguage,
                    "authToken": customCtrl.loginData.loginArr.authToken,
                    "requestType": "C",
                    "tripStartDate": customCtrl.quoteData.tripStartDate,
                    "tripEndDate": customCtrl.quoteData.tripEndDate,
                    "payment": {
                        "initialPolicyCost": customCtrl.returnQuotation.quotations[0].initialPolicyCost,
                        "paymentGatewayTransactionAmount": customCtrl.returnQuotation.quotations[0].paymentGatewayTransactionAmount,
                        "premiumAmount": customCtrl.returnQuotation.quotations[0].initalPremium,
                        "levyAmount": customCtrl.returnQuotation.quotations[0].levyAmount,
                        "levyEffectiveDate": customCtrl.returnQuotation.quotations[0].levyEffectiveDate,
                        "creditTransactionAmount": customCtrl.returnQuotation.quotations[0].creditTransactionAmount,
                        "promoCode": customCtrl.quoteData.promoCode,
                        "staffEmail": customCtrl.quoteData.staffEmail,
                        "promoTransactionAmount": customCtrl.returnQuotation.quotations[0].promoTransactionAmount
                    },
                    "segmentInd": customCtrl.selectCat.prodInd
                }
            };

            if (customCtrl.getProductSrcParameter !== false) {
                for (var key in customCtrl.getProductSrcParameter) {
                    var value = customCtrl.getProductSrcParameter[key];
                    customCtrl.saveFormArray.travelAppForm[key] = value;
                }
            }

            if (window.parent.aiaIshopPageFunction.sourceHandle.isiEngage()) {
                customCtrl.saveFormArray.travelAppForm.coiPayMode = customCtrl.quoteData.plans[0].coiPayMode;
            }

            if (customCtrl.loginData.loginArr.authToken !== null) {
                customCtrl.saveFormArray.travelAppForm.requestType = 'T';

                customCtrl.saveFormArray.travelAppForm.policyOwner.firstName = customCtrl.clientData.firstName;
                customCtrl.saveFormArray.travelAppForm.policyOwner.lastName = customCtrl.clientData.lastName;
                customCtrl.saveFormArray.travelAppForm.policyOwner.dob = customCtrl.clientData.dob;
                customCtrl.saveFormArray.travelAppForm.policyOwner.hkid = customCtrl.clientData.hkid;
                customCtrl.saveFormArray.travelAppForm.policyOwner.gender = customCtrl.clientData.gender;
            }

            if (typeof customCtrl.quoteData.staffEmail !== 'undefined' && customCtrl.quoteData.staffEmail !== '') {
                customCtrl.saveFormArray.travelAppForm.staffEmail = customCtrl.quoteData.staffEmail;
                customCtrl.saveFormArray.travelAppForm.requestType = 'O';
                customCtrl.saveFormArray.travelAppForm.source = customCtrl.selectCat.source;
                customCtrl.saveFormArray.travelAppForm.applyForOwn = customCtrl.preSubmitTempData.staffBuyForOwn;
                if (customCtrl.preSubmitTempData.staffBuyForOwn == 'N') {
                    customCtrl.saveFormArray.travelAppForm.employeeRelationship = customCtrl.preSubmitTempData.relationshipOption;
                }
            } else {
                customCtrl.saveFormArray.travelAppForm.staffEmail = '';
            }

            if (customCtrl.preSubmitTempData.optOut == '0') {
                customCtrl.saveFormArray.travelAppForm.optOut = "N";
            }

            if (customCtrl.returnQuotation.activeTravelPolicyNo == '' || customCtrl.returnQuotation.activeTravelPolicyNo == null) {
                //				customCtrl.saveFormArray.travelAppForm.contractLanguage = customCtrl.preSubmitTempData.contractLang;
                if (customCtrl.formLanguage == 'zh-hk') {
                    customCtrl.saveFormArray.travelAppForm.contractLanguage = '01';
                } else if (customCtrl.formLanguage == 'en') {
                    customCtrl.saveFormArray.travelAppForm.contractLanguage = '02';
                }
            }

            // if(customCtrl.returnQuotation.availableCreditBalance !== null){
            // 	if(customCtrl.returnQuotation.availableCreditBalance >= customCtrl.returnQuotation.quotations[0].initialPolicyCost){
            // 		customCtrl.saveFormArray.travelAppForm.payment.creditTransactionAmount = customCtrl.returnQuotation.quotations[0].initialPolicyCost;
            // 		customCtrl.saveFormArray.travelAppForm.payment.paymentGatewayTransactionAmount = 0;

            // 		cardInformation.visible = false;
            // 		$('.btnPayNow button').html(customCtrl.langText.payNowBtn);
            // 	} else {
            // 		customCtrl.saveFormArray.travelAppForm.payment.creditTransactionAmount = customCtrl.returnQuotation.availableCreditBalance;
            // 		customCtrl.saveFormArray.travelAppForm.payment.paymentGatewayTransactionAmount = customCtrl.returnQuotation.quotations[0].initialPolicyCost - customCtrl.returnQuotation.availableCreditBalance;
            // 	}
            // }
            if (customCtrl.saveFormArray.travelAppForm.payment.paymentGatewayTransactionAmount == 0) {
                cardInformation.visible = false;
                $('.btnPayNow button').html(customCtrl.langText.payNowBtn[customCtrl.formLanguage]);
            }

            if (customCtrl.quoteInput.numberOfAdults > 1) {
                var spouseDb = {
                    "firstName": customCtrl.preSubmitTempData.spouseFirstNmInEng,
                    "lastName": customCtrl.preSubmitTempData.spouseLastNmInEng,
                    "dob": customCtrl.transDateToBackend(customCtrl.preSubmitTempData.spouseDob),
                    "gender": customCtrl.preSubmitTempData.spouseGender,
                    "relationship": "S"
                };
                if (customCtrl.preSubmitTempData.spouseNonPermanentHkid == '0') {
                    spouseDb.passportNo = customCtrl.preSubmitTempData.spousePassportNum;
                    spouseDb.passportExpiryDate = customCtrl.transDateToBackend(customCtrl.preSubmitTempData.spousePassportExpiryDate);
                    spouseDb.hkid = "";
                } else {
                    spouseDb.passportNo = "";
                    spouseDb.passportExpiryDate = "";
                    spouseDb.hkid = customCtrl.preSubmitTempData.spouseHkidNum;
                }

                customCtrl.saveFormArray.travelAppForm.policyOwner.companions.push(spouseDb);
            }

            if (customCtrl.quoteInput.numberOfChildren > 0) {
                for (var i = 1; i <= customCtrl.quoteInput.numberOfChildren; i++) {
                    var eq = i;
                    if (i < 10) {
                        var eq = '0' + i;
                    }
                    console.log(eq);

                    var childDb = {
                        "firstName": customCtrl.preSubmitTempData["childFirstNmInEng" + eq],
                        "lastName": customCtrl.preSubmitTempData["childLastNmInEng" + eq],
                        "dob": customCtrl.transDateToBackend(customCtrl.preSubmitTempData["childDob" + eq]),
                        "gender": customCtrl.preSubmitTempData["childGender" + eq],
                        "relationship": "C"
                    };
                    if (customCtrl.preSubmitTempData["childNonPermanentHkid" + eq] == '0') {
                        childDb.passportNo = customCtrl.preSubmitTempData["childPassportNum" + eq];
                        childDb.passportExpiryDate = customCtrl.transDateToBackend(customCtrl.preSubmitTempData["childPassportExpiryDate" + eq]);
                        childDb.hkid = "";
                    } else {
                        childDb.passportNo = "";
                        childDb.passportExpiryDate = "";
                        childDb.hkid = customCtrl.preSubmitTempData["childHkidNum" + eq];
                    }

                    customCtrl.saveFormArray.travelAppForm.policyOwner.companions.push(childDb);

                }
            }

            for (var i = 0; i < customCtrl.returnQuotation.quotations[0].coverages.length; i++) {
                customCtrl.saveFormArray.travelAppForm.coverages.push({
                    "coverageType": customCtrl.returnQuotation.quotations[0].coverages[i].coverageType,
                    "planCode": customCtrl.returnQuotation.quotations[0].plan.planCode,
                    "coverageName": customCtrl.returnQuotation.quotations[0].coverages[i].coverageName,
                    "coveragePremium": customCtrl.returnQuotation.quotations[0].coverages[i].coveragePremium
                });
            }

            if (customCtrl.preSubmitTempData.chooseBeneInfo == 'N') {
                customCtrl.saveFormArray.travelAppForm.beneficiary.ownEstate == 'N';

                for (var i = 0; i < customCtrl.preSubmitTempData.beneIDcard.length; i++) {
                    customCtrl.saveFormArray.travelAppForm.beneficiary.beneficiaries.push({
                        // "benAge": customCtrl.preSubmitTempData.beneAge[i],
                        "benAllocation": customCtrl.preSubmitTempData.beneSharePercent[i],
                        // "benChiName": customCtrl.preSubmitTempData.beneLastNameInChi[i] + customCtrl.preSubmitTempData.beneFirstNameInChi[i],
                        "benEngName": customCtrl.preSubmitTempData.beneLastNameInEng[i] + customCtrl.preSubmitTempData.beneFirstNameInEng[i],
                        "benId": customCtrl.preSubmitTempData.beneIDcard[i],
                        "benRel": customCtrl.preSubmitTempData.beneRelationship[i],
                        // "pdfBenRel": $('.beneRelationship select').eq(i).find('option:selected').text()
                        "pdfBenRel": customCtrl.preSubmitTempData.beneRelationship[i]
                    });
                }
            }

            console.log(customCtrl.saveFormArray);

            $.ajax({
                url: customCtrl.apiObj.saveTravelAppFormApi,
                type: 'POST',
                data: JSON.stringify(customCtrl.saveFormArray),
                dataType: 'json',
                contentType: 'application/json'
            }).done(function (jdata) {
                console.log(jdata);

                customCtrl.saveFormArrayResponse = jdata;

                if (callback) {
                    callback();
                }
            });
        };

        var doTravelPayment = function () {
            var paymentArray = {
                "userId": "",
                "sessionId": "",
                "country": "hk",
                "language": customCtrl.formLanguage,
                "partyId": "",
                "purchaseKey": customCtrl.purKey,
                "payment": {
                    "initialPolicyCost": customCtrl.returnQuotation.quotations[0].initialPolicyCost,
                    "paymentGatewayTransactionAmount": customCtrl.returnQuotation.quotations[0].paymentGatewayTransactionAmount,
                    "premiumAmount": customCtrl.returnQuotation.quotations[0].initalPremium,
                    "levyAmount": customCtrl.returnQuotation.quotations[0].levyAmount,
                    "levyEffectiveDate": customCtrl.returnQuotation.quotations[0].levyEffectiveDate,
                    "creditTransactionAmount": customCtrl.returnQuotation.quotations[0].creditTransactionAmount,
                    "promoCode": customCtrl.quoteData.promoCode,
                    "staffEmail": customCtrl.quoteData.staffEmail,
                    "promoTransactionAmount": customCtrl.returnQuotation.quotations[0].promoTransactionAmount,
                    "cardInfo": {
                        "cardType": customCtrl.preSubmitTempData.creditCardType,
                        "cardNo": customCtrl.preSubmitTempData.cardNo,
                        "cardExpiry": customCtrl.preSubmitTempData.cardExpiryYear + customCtrl.preSubmitTempData.cardExpiryMonth,
                        "cardSecurityCode": customCtrl.preSubmitTempData.securityCode,
                        "cardHolderName": customCtrl.preSubmitTempData.nameOfCardholder
                    }
                },
                "authToken": customCtrl.loginData.loginArr.authToken,
                // "isSelectAgent": "Y",
                "question1": "F",
                "question2": "F",
                "agreementHtml": ""
            }

            if ($('.guideCheckBoxItem.financialPlannerQuestion').eq(0).find('input').is(':checked')) {
                paymentArray.question1 = "T";
            }
            if ($('.guideCheckBoxItem.financialPlannerQuestion').length > 1) {
                if ($('.guideCheckBoxItem.financialPlannerQuestion').eq(1).find('input').is(':checked')) {
                    paymentArray.question2 = "T";
                }
            }
            console.log('paymentArray: ', paymentArray);

            $.ajax({
                url: customCtrl.apiObj.doTravelPaymentApi,
                type: 'POST',
                data: JSON.stringify(paymentArray),
                dataType: 'json',
                contentType: 'application/json'
            }).done(function (jdata) {
                console.log(jdata);

                if (jdata.success !== 'false' && jdata.success !== false) {
                    $('.payment-error-message').text('');

                    if (jdata.paymentInfo.paymentGatewayUrl == '' || jdata.paymentInfo.paymentRequestParams == '') {
                        // payment-return-page go to "en" for all Language
                        window.parent.location.href = '/en/payment-return-page.html';
                    } else {
                        $(window.parent.document).find('.virtual-form').attr('action', jdata.paymentInfo.paymentGatewayUrl);

                        var paymentRequestParams = jdata.paymentInfo.paymentRequestParams;
                        var innerArray;
                        var array = paymentRequestParams.split('&');
                        var each = {};

                        var injectData = function () {
                            var _html = '';
                            for (prop in each) {
                                _html += '<div><input name="' + prop + '"  value="' + unescape(each[prop]) + '"/></span></div>';
                            }
                            console.log(_html);
                            $(window.parent.document).find('.virtual-form').append(_html);
                        };
                        var relisting = function () {
                            for (var i = 0; i < array.length; i++) {
                                innerArray = array[i].split('=');
                                for (var y = 0; y < innerArray.length; y++) {

                                    each[innerArray[0]] = innerArray[1];
                                }
                            }
                            injectData();
                        };

                        $.when(relisting()).then(function () {
                            window.onbeforeunload = null;
                            window.parent.onbeforeunload = null;
                            $(window.parent.document).find('.virtual-form input[type=submit]').click();
                        });
                    }

                } else {
                    $('.AIAEntityBtn button').attr('disabled', false);

                    if (jdata.code == 'bl6006') {
                        $('.payment-error-message').html(customCtrl.errorMsg.creditCardErrBL6006[customCtrl.formLanguage][0] + jdata.code + ' / ' + customCtrl.purKey + customCtrl.errorMsg.creditCardErrBL6006[customCtrl.formLanguage][1]);
                    } else if (jdata.code == 'tc5001' || jdata.code == 'pc5001') {
                        customCtrl.quoteData.promoCode = '';

                        customCtrl.getTravelQuotation(function () {
                            customCtrl.capData2Preview();
                            customCtrl.saveTravelAppForm();

                            $('.promoCodePanel .guideFieldError').html('');
                            $('.promoCodePanel .promoMsg .guideFieldError').text(customCtrl.errorMsg.tc2001[customCtrl.formLanguage]);
                        });
                    } else if (jdata.code == '822') {
                        $('.payment-error-message').html(jdata.message + ' (code:' + jdata.code + ' / ' + customCtrl.quoteData.purchaseKey + ')');
                    } else {
                        $('.payment-error-message').html(customCtrl.errorMsg.saveAppFormErr[customCtrl.formLanguage][0] + jdata.code + ' / ' + customCtrl.quoteData.purchaseKey + customCtrl.errorMsg.saveAppFormErr[customCtrl.formLanguage][1]);
                    }

                }
            });
        };

        var goStep1progress = function () {
            console.log('p line 1');
            window.parent.$('.step-line-block').show();
            //			window.parent.$('.topSpacer').removeClass('friststep');

            window.parent.$('.progress-line-container .progress-line .step-one').addClass('active').removeClass('complete');
            window.parent.$('.progress-line-container .progress-line .step-two').removeClass('active complete');
            window.parent.$('.progress-line-container .progress-line .step-three').removeClass('active complete');

            window.parent.$('.login-message-step-1').removeClass('hidden');
            window.parent.$('.login-message-step-2, .login-message-step-3').addClass('hidden');

            window.parent.$('.mobile-progress-line .progress-line-blue').removeClass('step-two step-three').addClass('step-one');

            // add on 20190718
            window.parent.$('.progress-message .step-one').removeClass('hide');
            window.parent.$('.progress-message .step-two').addClass('hide');
            window.parent.$('.progress-message .step-three').addClass('hide');
            $('.step1-notes').removeClass('hide');
        };
        var goStep2progress = function () {
            console.log('p line 2');
            window.parent.$('.step-line-block').show();
            //			window.parent.$('.topSpacer').removeClass('friststep');

            window.parent.$('.progress-line-container .progress-line .step-one').removeClass('active').addClass('complete');
            window.parent.$('.progress-line-container .progress-line .step-two').addClass('active').removeClass('complete');
            window.parent.$('.progress-line-container .progress-line .step-three').removeClass('active complete');

            window.parent.$('.login-message-step-2').removeClass('hidden');
            window.parent.$('.login-message-step-1, .login-message-step-3').addClass('hidden');

            window.parent.$('.mobile-progress-line .progress-line-blue').removeClass('step-one step-three').addClass('step-two');

            // add on 20190718
            window.parent.$('.progress-message .step-one').addClass('hide');
            window.parent.$('.progress-message .step-two').removeClass('hide');
            window.parent.$('.progress-message .step-three').addClass('hide');
            $('.step1-notes').addClass('hide');
        };
        var goStep3progress = function () {
            console.log('p line 3');
            window.parent.$('.step-line-block').show();
            //			window.parent.$('.topSpacer').removeClass('friststep');

            window.parent.$('.progress-line-container .progress-line .step-one').removeClass('active').addClass('complete');
            window.parent.$('.progress-line-container .progress-line .step-two').removeClass('active').addClass('complete');
            window.parent.$('.progress-line-container .progress-line .step-three').addClass('active').removeClass('complete');

            window.parent.$('.login-message-step-3').removeClass('hidden');
            window.parent.$('.login-message-step-1, .login-message-step-2').addClass('hidden');

            window.parent.$('.mobile-progress-line .progress-line-blue').removeClass('step-one step-two').addClass('step-three');

            // add on 20190718
            window.parent.$('.progress-message .step-one').addClass('hide');
            window.parent.$('.progress-message .step-two').addClass('hide');
            window.parent.$('.progress-message .step-three').removeClass('hide');
            $('.step1-notes').addClass('hide');
        };

        this.customCtrl.init = init;
        this.customCtrl = scope.customCtrl;
        this.customCtrl.girdAdjust = girdAdjust;
        this.customCtrl.trimData = trimData;
        this.customCtrl.travelLogin = travelLogin;
        this.customCtrl.limitInputEntry = limitInputEntry;
        this.customCtrl.getTravelClientInfo = getTravelClientInfo;
        this.customCtrl.getTravelQuotation = getTravelQuotation;
        this.customCtrl.getCompanionsData = getCompanionsData;
        this.customCtrl.doTravelPayment = doTravelPayment;
        this.customCtrl.filltravelClientData = filltravelClientData;
        this.customCtrl.goInfomationPage = goInfomationPage;
        this.customCtrl.goDeclarationPage = goDeclarationPage;
        this.customCtrl.modifyDatePicker = modifyDatePicker;
        this.customCtrl.modifyPassportDateRange = modifyPassportDateRange;
        this.customCtrl.transDateToBackend = transDateToBackend;
        this.customCtrl.capData2Preview = capData2Preview;
        //		this.customCtrl.amountFormatting = amountFormatting;
        this.customCtrl.scrollToError = scrollToError;
        this.customCtrl.saveTravelAppForm = saveTravelAppForm;
        this.customCtrl.checkExistingCustomer = checkExistingCustomer;
        this.customCtrl.getAgentInfo = getAgentInfo;
        this.customCtrl.countAddressLength = countAddressLength;
        this.customCtrl.goStep1progress = goStep1progress;
        this.customCtrl.goStep2progress = goStep2progress;
        this.customCtrl.goStep3progress = goStep3progress;
        this.customCtrl.dateToDatepicker = dateToDatepicker;

        console.log(this.customCtrl);

    })();
    jQuery(customCtrl.init);
});