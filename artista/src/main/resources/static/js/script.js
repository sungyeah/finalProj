
window.DesignFuncs = {};

$(function () {
    // datetimepicker setting
    /*$.datetimepicker.setLocale('ko');
    $.dtpConf = {
        format: 'Y-m-d H:i'
    }
*/
									 
    $(document).on("click", '.guide .gd_left .gd_1d > li > a', function () {
        $(".guide .gd_left .gd_1d .gd_2d a").removeClass("on");
        $("+.gd_2d li:first-child a", this).addClass("on");
        var tab_id2 = $(this).attr('href');
        $(".guide .gd_left .gd_1d > li > a").removeClass("on");
        $(this).addClass('on');
        $('.guide .gd_wrap').removeClass('on');
        $(tab_id2).addClass('on');
        $(".gd_cont").removeClass("on");
        $(tab_id2).find(".gd_cont:first-child").addClass("on")
        /*if (tab_id2 == '#gd01') {
            $("#gd01").find(".gd_cont:first-child").addClass("on");
            if ($(this).hasClass("on")) {
                $("+ .gd_2d", this).addClass("on");
            }
        } else {
            $(".gd_2d").removeClass("on");
        }
        
        if (tab_id2 == '#gd05') {
            $("#gd05").find(".gd_cont:first-child").addClass("on");
            if ($(this).hasClass("on")) {
                $("+ .gd_2d", this).addClass("on");
            }
        } else {
            $(".gd_2d").removeClass("on");
        }
        
        if (tab_id2 == '#gd06') {
            $("#gd06").find(".gd_cont:first-child").addClass("on");
            if ($(this).hasClass("on")) {
                $("+ .gd_2d", this).addClass("on");
            }
        } else {
            $(".gd_2d").removeClass("on");
        }
        */
        return false;
    });
    $(document).on("click", '.guide .gd_left .gd_1d .gd_2d a', function () {

        $(".guide nav > .gd_1d > li > a").removeClass("on");


        $('.guide .gd_wrap').removeClass('on');
        var loca = $(this).closest(".li").find(".a1").attr("href");
        $(this).closest(".li").find(".a1").addClass('on');
        $(loca).addClass('on');

        var tab_id3 = $(this).attr('href');
        $(".guide .gd_left .gd_1d .gd_2d a").removeClass("on");
        $(this).addClass('on');
        $('.guide .gd_cont').removeClass('on');
        $(tab_id3).addClass('on');
        return false;
    });

//	// ?????? ????????? ??????
//	var fileIndex = 0;
//	// ????????? ?????? ?????? ?????????
//	var totalFileSize = 0;
//	// ?????? ?????????
//	var fileList = new Array();
//	// ?????? ????????? ?????????
//	var fileSizeList = new Array();
//	// ?????? ????????? ?????? ????????? MB
//	var uploadSize = 50;
//	// ?????? ????????? ??? ?????? ????????? MB
//	var maxUploadSize = 500;
//
//	function fileDropDown() {
//	    var dropZone = $("#dropZone");
//	    //Drag?????? 
//	    dropZone.on('dragenter', function (e) {
//	        e.stopPropagation();
//	        e.preventDefault();
//	        // ???????????? ?????? css
//	        dropZone.css('background-color', '#E3F2FC');
//	    });
//	    dropZone.on('dragleave', function (e) {
//	        e.stopPropagation();
//	        e.preventDefault();
//	        // ???????????? ?????? css
//	        dropZone.css('background-color', '#FFFFFF');
//	    });
//	    dropZone.on('dragover', function (e) {
//	        e.stopPropagation();
//	        e.preventDefault();
//	        // ???????????? ?????? css
//	        dropZone.css('background-color', '#E3F2FC');
//	    });
//	    dropZone.on('drop', function (e) {
//	        e.preventDefault();
//	        // ???????????? ?????? css
//	        dropZone.css('background-color', '#FFFFFF');
//
//	        var files = e.originalEvent.dataTransfer.files;
//	        if (files != null) {
//	            if (files.length < 1) {
//	                /* alert("?????? ????????? ??????"); */
//	                console.log("?????? ????????? ??????");
//	                return;
//	            } else {
//	                selectFile(files)
//	            }
//	        } else {
//	            alert("ERROR");
//	        }
//	    });
//	}
//
//	// ?????? ?????????
//	function selectFile(fileObject) {
//	    var files = null;
//
//	    if (fileObject != null) {
//	        // ?????? Drag ???????????? ?????????
//	        files = fileObject;
//	    } else {
//	        // ?????? ?????? ?????????
//	        files = $('#multipaartFileList_' + fileIndex)[0].files;
//	    }
//
//	    // ???????????? ??????
//	    if (files != null) {
//
//	        if (files != null && files.length > 0) {
//	            $("#fileDragDesc").hide();
//	            $("fileListTable").show();
//	        } else {
//	            $("#fileDragDesc").show();
//	            $("fileListTable").hide();
//	        }
//
//	        for (var i = 0; i < files.length; i++) {
//	            // ?????? ??????
//	            var fileName = files[i].name;
//	            var fileNameArr = fileName.split("\.");
//	            // ?????????
//	            var ext = fileNameArr[fileNameArr.length - 1];
//
//	            var fileSize = files[i].size; // ?????? ?????????(?????? :byte)
//	            console.log("fileSize=" + fileSize);
//	            if (fileSize <= 0) {
//	                console.log("0kb file return");
//	                return;
//	            }
//
//	            var fileSizeKb = fileSize / 1024; // ?????? ?????????(?????? :kb)
//	            var fileSizeMb = fileSizeKb / 1024; // ?????? ?????????(?????? :Mb)
//
//	            var fileSizeStr = "";
//	            if ((1024 * 1024) <= fileSize) { // ?????? ????????? 1?????? ????????? ?????? 
//	                console.log("fileSizeMb=" + fileSizeMb.toFixed(2));
//	                fileSizeStr = fileSizeMb.toFixed(2) + " Mb";
//	            } else if ((1024) <= fileSize) {
//	                console.log("fileSizeKb=" + parseInt(fileSizeKb));
//	                fileSizeStr = parseInt(fileSizeKb) + " kb";
//	            } else {
//	                console.log("fileSize=" + parseInt(fileSize));
//	                fileSizeStr = parseInt(fileSize) + " byte";
//	            }
//
//	            /* if ($.inArray(ext, [ 'exe', 'bat', 'sh', 'java', 'jsp', 'html', 'js', 'css', 'xml' ]) >= 0) {
//	                // ????????? ??????
//	                alert("?????? ?????? ?????????");
//	                break; */
//	            if ($.inArray(ext, ['hwp', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'txt', 'png', 'pdf', 'jpg', 'jpeg', 'gif', 'zip']) <= 0) {
//	                // ????????? ??????
//	                /* alert("????????? ???????????? ?????? ?????????.");
//	                break; */
//	                alert("????????? ???????????? ?????? ?????????.(" + fileName + ")");
//	            } else if (fileSizeMb > uploadSize) {
//	                // ?????? ????????? ??????
//	                alert("?????? ??????\n????????? ?????? ?????? : " + uploadSize + " MB");
//	                break;
//	            } else {
//	                // ?????? ?????? ?????????
//	                totalFileSize += fileSizeMb;
//
//	                // ?????? ????????? ??????
//	                fileList[fileIndex] = files[i];
//
//	                // ?????? ????????? ????????? ??????
//	                fileSizeList[fileIndex] = fileSizeMb;
//
//	                // ????????? ?????? ?????? ??????
//	                addFileList(fileIndex, fileName, fileSizeStr);
//
//	                // ?????? ?????? ??????
//	                fileIndex++;
//	            }
//	        }
//	    } else {
//	        alert("ERROR");
//	    }
//	}
//
//	// ????????? ?????? ?????? ??????
//	function addFileList(fIndex, fileName, fileSizeStr) {
//	    /* if (fileSize.match("^0")) {
//	        alert("start 0");
//	    } */
//
//	    var html = "";
//	    html += "<div id='fileTr_" + fIndex + "'>";
//	    html += "    <div id='' class='left' >";
//	    html += fileName + " (" + fileSizeStr + ") "
//	        //+ "<a href='#' onclick='deleteFile(" + fIndex + "); return false;' class='btn small bg_02'> ??????</a>"
//
//	        +
//	        "<input value='??????' class='upload_del' type='button' href='#' onclick='deleteFile(" + fIndex + "); return false;'>"
//	    html += "    </div>"
//	    html += "</div>"
//
//	    $('#fileTableTbody').append(html);
//	}
//
//	// ????????? ?????? ??????
//	function deleteFile(fIndex) {
//	    console.log("deleteFile.fIndex=" + fIndex);
//	    // ?????? ?????? ????????? ??????
//	    totalFileSize -= fileSizeList[fIndex];
//
//	    // ?????? ???????????? ??????
//	    delete fileList[fIndex];
//
//	    // ?????? ????????? ?????? ??????
//	    delete fileSizeList[fIndex];
//
//	    // ????????? ?????? ????????? ???????????? ??????
//	    $("#fileTr_" + fIndex).remove();
//
//	    console.log("totalFileSize=" + totalFileSize);
//
//	    if (totalFileSize > 0) {
//	        $("#fileDragDesc").hide();
//	        $("fileListTable").show();
//	    } else {
//	        $("#fileDragDesc").show();
//	        $("fileListTable").hide();
//	    }
//	}
//
//	// ?????? ??????
//	function uploadFile() {
//	    // ????????? ?????? ?????????
//	    var uploadFileList = Object.keys(fileList);
//
//	    // ????????? ????????? ??????
//	    if (uploadFileList.length == 0) {
//	        // ???????????? ?????????
//	        alert("????????? ????????????.");
//	        return;
//	    }
//
//	    // ????????? 500MB??? ?????? ?????? ????????? ??????
//	    if (totalFileSize > maxUploadSize) {
//	        // ?????? ????????? ?????? ?????????
//	        alert("??? ?????? ??????\n??? ????????? ?????? ?????? : " + maxUploadSize + " MB");
//	        return;
//	    }
//
//	    if (confirm("?????? ???????????????????")) {
//	        // ????????? ?????? ???????????? formData??? ????????? ??????
//	        var form = $('#uploadForm');
//	        var formData = new FormData(form);
//	        for (var i = 0; i < uploadFileList.length; i++) {
//	            formData.append('files', fileList[uploadFileList[i]]);
//	        }
//
//	        $.ajax({
//	            url: "????????? ??????",
//	            data: formData,
//	            type: 'POST',
//	            enctype: 'multipart/form-data',
//	            processData: false,
//	            contentType: false,
//	            dataType: 'json',
//	            cache: false,
//	            success: function (result) {
//	                if (result.data.length > 0) {
//	                    alert("??????");
//	                    location.reload();
//	                } else {
//	                    alert("??????");
//	                    location.reload();
//	                }
//	            }
//	        });
//	    }
//	}


    var handle = $("#custom-handle");
    DesignFuncs.createJquerySlider = function(elm, option){
    	var onSlide = option.slide;
    	if(onSlide) {
//			if(option.min != undefined) option.min = option.min / option.step;
//			if(option.max != undefined) option.max = option.min / option.step;
    		var rangeValueInp = elm.parentElement.querySelector('input.rangeValue');
    		rangeValueInp.value = option.value || 0;
    		option.slide = function(event, ui){
    			var val = ui.value;
    			rangeValueInp.value = val;

//    			onSlide(val * option.step);
    			onSlide(val);
    		}
    		myjs.makeToInputNumber([rangeValueInp], {useDecimalPoint: true});
    		rangeValueInp.addEventListener('blur', function(){
				if(this.value < option.min) this.value = option.min;
				if(this.value > option.max) this.value = option.max;
				this.value = this.value - (this.value / (option.step || 1) % 1) * (option.step || 1);
				$(elm).slider('value', this.value);
				onSlide(this.value);
    		});
    	}
    	//console.log(option);
    	return $(elm).slider(option);
    	//console.log($(elm));
    }
    DesignFuncs.createJqueryColorPicker = function(elm, option){
    	return $(elm).minicolors(option);
    }

    $(document).on("click", ".widget .widget_wrapper .inner .box .btns a", function () {
        $(".widget .widget_wrapper .inner .box .btns a").removeClass("on");
        $(this).addClass("on");
    });
    $(document).on("change", ".radio input[type='radio']", function () {
        //        if ($(this).hasClass("musicRadio")) {
        //            var musicValue = $(this).prop("checked");
        //            if (musicValue) {
        //                $(".upload.music").addClass("on");
        //            }
        //        } else {
        //            $(".upload.music").removeClass("on");
        //        }

    });
    /*select image*/
    $(document).on("click", ".sel_div .sel_ul_wrap > a", function () {
        $("+ul", this).toggle();
    });
    $(document).on("click", ".sel_div.sel_img .sel_ul_wrap ul li a", function () {
        var img = $(this).html();
        var text = $(this).attr("href");
        $(this).closest(".sel_div").find(".img").html(img);
        $(this).closest(".sel_div .sel_ul_wrap").find(".tab_a").html(text + "<i class='fa fa-sort-down'></i>");
        $(this).closest(".sel_div .sel_ul_wrap").find("ul").toggle();

        if(DesignFuncs.selectDivImg && DesignFuncs.selectDivImg.onSelect) DesignFuncs.selectDivImg.onSelect(this);
        
        return false;
    });
    $(document).on("click", function (e) {
        if ($(".sel_div .sel_ul_wrap ul").css("display") == "block") {
            if ($(".sel_div .sel_ul_wrap").has(e.target).length == 0) {
                $(".sel_div .sel_ul_wrap ul").hide()
            }
        }

    });
    /*select text*/
    DesignFuncs.selectDivTxtFunc = function(ev) {
    	ev.preventDefault();
    	
        var text = $(this).attr("href");
        $(this).closest(".sel_div .sel_ul_wrap").find(".tab_a").html(text + "<i class='fa fa-sort-down'></i>");
        $(this).closest("ul").hide();
        
        if(DesignFuncs.selectDivTxt && DesignFuncs.selectDivTxt.onSelect) DesignFuncs.selectDivTxt.onSelect(this);
        
        return false;
    }
    $(document).on("click", ".sel_div.sel_txt .sel_ul_wrap ul li a", DesignFuncs.selectDivTxtFunc);

    $(document).on("click", '.editor_panel .tabs .tab', function () {
        var tab_id = $(this).attr('data-tab');
        $('.editor_panel .tabs .tab').removeClass('on');
        $('.panels .panel').removeClass('on');

        $(this).addClass('on');
        $("#" + tab_id).addClass('on');
    })

    $(document).on("click", ".bellWrap .btnBell", function () {
        $(".bellWrap .bellBox").addClass("on");
        return false;
    });
    $(document).on("click", "html", function (e) {
        if (!$(e.target).closest("div").hasClass("bellBox")) {
            $(".bellWrap .bellBox").removeClass("on");
        }

    });
    $(document).on("click", ".userWrap .btnUser", function () {
        $(".userWrap .userBox").addClass("on");
        $(".bellWrap .bellBox").removeClass("on");
        return false;
    });
    $(document).on("click", "html", function (e) {
        if (!$(e.target).closest("div").hasClass("userBox")) {
            $(".userWrap .userBox").removeClass("on");
        }

    });
    $(document).on("click", ".setting3d .editor_panel .ep_wrapper .panels .panel .widget .widget_wrapper .header a.state", function () {
        $(this).closest(".widget").toggleClass("active");
        if (!$(this).closest(".widget").hasClass("active")) {
            $(this).closest(".widget").addClass("block");
        } else {
            $(this).closest(".widget").removeClass("block");
        }
        if(DesignFuncs.onoffGroup && DesignFuncs.onoffGroup.onChange) DesignFuncs.onoffGroup.onChange($(this).closest(".widget")[0], $(this).closest(".widget").hasClass('active'));
    });
//    $(document).on("click", ".setting3d .popup .popTop a", function () {
//        $(this).closest(".popup").removeClass("on");
//    });
//    $(document).on("click", ".setting3d .editor_panel .ep_wrapper .panels .panel .widget .widget_wrapper .inner .box .textureBox a.openPop", function () {
//        $(".popup").addClass("on");
//    });
    $(document).on("click", ".display", function () {
        $(this).closest(".pickerRange").toggleClass("on");


    });
    /*$(document).on("click", "html", function (e) {
        if (!$(e.target).closest("div").hasClass("textureBox") && !$(e.target).hasClass("display")) {
            $(".pickerRange").removeClass("on");
        }

    });*/
    $('.setting3d .editor_panel .ep_wrapper .panels .panel .widget .widget_wrapper .header').click(function (e) {
        if (!$(e.target).hasClass("state")) {
            $(this).closest(".widget").toggleClass("opened");
        }
    });
    $('.widget .widget_wrapper .inHeader').click(function (e) {
        $(this).closest(".onoff_sel").toggleClass("no");
        if (!$(this).closest(".onoff_sel").hasClass("on")) {
            $(this).closest(".onoff_sel").addClass("on");
        } else {
            $(this).closest(".onoff_sel").removeClass("on");
        }
        if(DesignFuncs.onoffDiv && DesignFuncs.onoffDiv.onChange) DesignFuncs.onoffDiv.onChange($(this).closest(".onoff_sel")[0], $(this).closest(".onoff_sel").hasClass('on'));
    });


    $(document).on("click", ".threeD .tdRight .tdRightWrap .tdRightBox.tdRightDown .downloadTab li a", function () {
        $(".threeD .tdRight .tdRightWrap .tdRightBox.tdRightDown .downloadTab li a").removeClass("on")
        $(this).addClass("on");
        var threeTab = $(this).attr("href");
        $(".threeD .tdRight .tdRightWrap .tdRightBox.tdRightDown .downloadTabCont > div").removeClass("on");
        $(threeTab).addClass("on");
        if ($(this).hasClass("downloadUl01")) {
            $("#allowCheckbox input").attr("checked", false);
        } else {
            $("#allowCheckbox input").attr("checked", true);
        }
        return false;
    });
    $(document).on("click", ".threeD .tdCenter dl dd a.btn_selCate", function () {
        $(".threeD .tdCenter dl dd .cate").toggleClass("on");
        return false;
    });

    $(document).on("click", ".threeD .tdRight .tdRightWrap .tdRightBox .selectWho > a", function () {
        var selectWho = $(".threeD .tdRight .tdRightWrap .tdRightBox .selectWho");
        $(selectWho).toggleClass("on");
    });

    var rate = parseFloat($(".pay_btm .pay_btm_ul > li .pay_cont .rating").text());
    var rate_wid = (rate / 5) * 80;
    $(".pay_btm .pay_btm_ul > li .pay_cont .rating").css("width", rate_wid + "px");

    $(document).on("click", ".view .view_left .color ul.color_ul li a", function () {
        $(".view .view_left .color ul.color_ul li a").removeClass("on");
        $(this).addClass("on");
    });


    $(document).on("click", ".view .view_left h4 a", function () {
        $(".view .view_left").toggleClass("on");
        return false;
    });
    $(document).on("click", ".view .view_left .viewport ul.viewport_ul li a", function () {
        $(".view .view_left .viewport ul.viewport_ul li a").removeClass("on");
        $(this).addClass("on");
    });
    $(document).on("click", ".view .view_left .mi_box ul li a", function () {
        $(".view .view_left .mi_box ul li a").removeClass("on");
        $(this).addClass("on");
    });


    $(document).on("click", ".fileName", function () {

        $(".profPic input").trigger("click");
    });


    $(document).on("click", ".mypage .left ul li a", function () {
        var loca = $(this).attr("href");
        $(".mypage .right .tab").removeClass("on");
        $(".mypage .left ul li").removeClass("on");
        $(this).parent("li").addClass("on");
        $(loca).addClass("on");
        return false;
    });
    $(document).on("click", ".description a", function () {
        $(this).closest(".description").find("p").addClass("on");
        $(this).closest(".description").find("pre").addClass("on");
        $(this).remove();
        return false;
    });
    $(document).on("click", ".additionalDetail a", function () {
        $(this).closest(".additionalDetail").find("ul").addClass("on");
        $(this).remove();
        return false;
    });
    $(window).resize(function () {
        if ($(this).width() > 960) {
            $(".gnb").addClass("on");
        } else {
            $(".gnb").removeClass("on");
        }
    });
    var screen = $(window).width();
    if (screen > 960) {
        $(".gnb").addClass("on");
    } else {
        $(".gnb").removeClass("on");
    }
    $(document).on("click", ".lnb .lnbBtn", function () {
        $(".lnbWrap").addClass("on");
    });
    $(document).on("click", ".lnb .lnbClose", function () {
        $(".lnbWrap").removeClass("on");
    });
    $('.slider01').slick({
        centerMode: false,
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
			{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    centerMode: false,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }

        ]
    });
    $('.slider02').slick({
        centerMode: false,
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    centerMode: false,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }

        ]
    });
    $('.slider03').slick({
        centerMode: false,
        dots: false,
        infinite: false,
        speed: 400,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    centerMode: false,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }

        ]
    });
    $('.cardSlider01').slick({
        centerMode: false,
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    centerMode: false,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    centerMode: false,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: false,
                    dots: false
                }
            }

        ]
    });

    $(document).on("mouseover", ".box", function () {
        $(".b02", this).stop().fadeIn();
    });
    $(document).on("mouseout", ".box", function () {
        $(".b02", this).stop().fadeOut();
    });
    $(document).on("click", ".activityBtns li a", function () {
        var loca = $(this).attr("href");
        $(".activityBtns li a").removeClass("on");
        $(this).addClass('on');
        $(".tabWrap .tab").removeClass("on");
        $(loca).addClass('on');
        return false;
    });
    $(document).on("click", ".comment .commList ul li .commListTop .commCont a.btnReply", function () {
    	var isOpened = $(this).closest(".commCont").find(".commComm").hasClass('on');
        $(".commComm").removeClass("on");
        // 2021.07.12 toggle
        if(!isOpened){
        	$(this).closest(".commCont").find(".commComm").addClass("on");
        	// 2021.07.13 call function in create view
            if(DesignFuncs.comment && DesignFuncs.comment.onReplyOpened) DesignFuncs.comment.onReplyOpened($(this).parents('.commElm')[0]);
        }
        
        return false;
    });

    /*$(document).on("click", ".mini .miniLeft .putBox ul li a", function () {
        var loca = $(this).attr("href");
        var mtc = $(this).attr("marketTypeCd");	// 2021.06.22 marketTypeCd
        document.getElementById('createForm').marketTypeCd.value = mtc;
        if (loca == "#tab01") {
            $(".putBox .subTit").removeClass("on");
            $(".tab01").addClass("on");
        } else if (loca == "#tab02") {
            $(".putBox .subTit").removeClass("on");
            $(".tab02").addClass("on");
        } else {
            $(".putBox .subTit").removeClass("on");
            $(".tab03").addClass("on");
        }
        $(".mini .miniLeft .putBox ul li a").closest("li").removeClass("on");
        $(this).closest("li").addClass("on");
        $(".tab > div").removeClass("on");
        $(loca).addClass("on");
        
        // 2021.06.26 call function in create view
        if(DesignFuncs.createView && DesignFuncs.createView.onMarketTypeChange) DesignFuncs.createView.onMarketTypeChange(mtc);
        return false;
    });*/
    $(document).on("click", ".mini .miniLeft .put .checkbox input[name=marketYn]", function () {
        $(".putBox").toggleClass("on");
        $(".putBoxOn").toggleClass("on");
    });
    $(document).on("click", ".mini .miniLeft .lock .checkbox input[name=unlockableContentYn]", function () {
        $(".mini .miniLeft .lock .miniTop h3").toggleClass("on");
        $(".lockBox").toggleClass("on");
        $(".lockBox textarea").toggleClass("on");
    });
//    $("#input_file").bind('change', function () {
//        selectFile(this.files);
//        //this.files[0].size gets the size of your file.
//        //alert(this.files[0].size);
//    });
    
    //fileDropDown();
});


// image align on list pages
window.DesignFuncs.alignImages = (n, heightPlus, mbHeightPlus) => {
	heightPlus = heightPlus || 20;
	mbHeightPlus = mbHeightPlus || heightPlus;
	
    let images = document.querySelectorAll(".image");
    let imgStack = [];
    let colWidth = 100;
    
    if($(window).width() < 640) {
        let images = document.querySelectorAll(".image");
        let imgStack = [0];
        let colWidth = 0;

        for(let i = 0; i < images.length; i++) {
            let minIndex = imgStack.indexOf(Math.min.apply(0, imgStack));
            let x = colWidth * minIndex;
            let y = imgStack[minIndex];

            imgStack[minIndex] += $(images[i]).height() + mbHeightPlus;//(images[i].children[0].children[0].children[0].children[0].children[0].height + mbHeightPlus);
            images[i].style.transform = `translate(0%,${y}px)`;
            if(i === images.length - 1) {
                document.querySelector(".images").style.height = `${Math.max.apply(0, imgStack)}px`;
            }
        }
    }/*else if($(window).width() < 640) {
        let images = document.querySelectorAll(".image");
        let imgStack = [0, 0];
        let colWidth = 100;

        for(let i = 0; i < images.length; i++) {
            let minIndex = imgStack.indexOf(Math.min.apply(0, imgStack));
            let x = colWidth * minIndex;
            let y = imgStack[minIndex];

            imgStack[minIndex] += (images[i].children[0].children[0].children[0].children[0].children[0].height + heightPlus);
            images[i].style.transform = `translate(${x}%,${y}px)`;
            if(i === images.length - 1) {
                document.querySelector(".images").style.height = `${Math.max.apply(0, imgStack)}px`;
            }
        }
    }*/else{
        for(let i = 0; i < n; i++) imgStack.push(0);
        
        for(let i = 0; i < images.length; i++) {
            let minIndex = imgStack.indexOf(Math.min.apply(0, imgStack));
            let x = colWidth * minIndex;
            let y = imgStack[minIndex];
            
            imgStack[minIndex] +=  $(images[i]).height() + heightPlus;//(images[i].children[0].children[0].children[0].children[0].children[0].height + heightPlus);
            images[i].style.transform = `translate(${x}%,${y}px)`;
            if(i === images.length - 1) {
                document.querySelector(".images").style.height = `${Math.max.apply(0, imgStack)}px`;
            }
        }
    }
}
