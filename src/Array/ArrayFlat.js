var arr1 = [1,2,3,[1,2,3,4, [2,3,4]]];
function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    // 使用 pop 从 stack 中取出并移除值
    const next = stack.pop();
    if (Array.isArray(next)) {
      // 使用 push 送回内层数组中的元素，不会改动原始输入 original input
      stack.push(...next);
    } else {
      res.push(next);
    }
  }
  // 使用 reverse 恢复原数组的顺序
  return res.reverse();
}
flatten(arr1);// [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]


var arr2 = [
    {
        "NODE_ID": "9259411CB6F3AB41B5FBCDF8139A6E2B",
        "PARENT_NODE_ID": null,
        "ROOT_TAG_ID": "9259411CB6F3AB41B5FBCDF8139A6E2B",
        "SEQUENCE_NUMBER": 20,
        "TYPE": "CAT",
        "SHORT_TEXT": "竞技 | Athletics",
        "EXERCISE_COUNT": 1,
        "_DELETE": 1,
        "_UPDATE": 1,
        "_ADD": 1,
        "_MANAGE_PERMISSIONS": 1,
        "nodes": [
            {
                "NODE_ID": "F13E5CD37DF45E43B1F29E46536D2901",
                "PARENT_NODE_ID": "9259411CB6F3AB41B5FBCDF8139A6E2B",
                "ROOT_TAG_ID": "9259411CB6F3AB41B5FBCDF8139A6E2B",
                "SEQUENCE_NUMBER": 10,
                "TYPE": "CAT",
                "SHORT_TEXT": "耐力 | Stamina ",
                "EXERCISE_COUNT": 6,
                "_DELETE": 1,
                "_UPDATE": 1,
                "_ADD": 1,
                "_MANAGE_PERMISSIONS": 1,
                "nodes": [
                    {
                        "NODE_ID": "31CEA0B0B0CF0E40A581839E1069A47E",
                        "EXERCISE_TAG_ID": "54D382DC5F6B304DB142387E7330DB32",
                        "PARENT_NODE_ID": "F13E5CD37DF45E43B1F29E46536D2901",
                        "TYPE": "EX",
                        "SHORT_TEXT": "30,60,90 | 30,60,90",
                        "_DELETE": 1,
                        "_UPDATE": 1
                    },
                    {
                        "NODE_ID": "D02C47DF5BB8FA4F91F72C0F40540FA2",
                        "EXERCISE_TAG_ID": "055C3785AA50BF4B920C8D2F65298D1D",
                        "PARENT_NODE_ID": "F13E5CD37DF45E43B1F29E46536D2901",
                        "TYPE": "EX",
                        "SHORT_TEXT": "test",
                        "_DELETE": 1,
                        "_UPDATE": 1
                    },
                    {
                        "NODE_ID": "392AC8599930344490D7500BB67B1022",
                        "EXERCISE_TAG_ID": "D039F476A7A6B147A336640C26313B44",
                        "PARENT_NODE_ID": "F13E5CD37DF45E43B1F29E46536D2901",
                        "TYPE": "EX",
                        "SHORT_TEXT": "循环训练 | Circle training ",
                        "_DELETE": 1,
                        "_UPDATE": 1
                    },
                    {
                        "NODE_ID": "87BCC13F25F16447AA8214BCD88F2E07",
                        "EXERCISE_TAG_ID": "7DC036BC60231C4A8C45650BAE346B95",
                        "PARENT_NODE_ID": "F13E5CD37DF45E43B1F29E46536D2901",
                        "TYPE": "EX",
                        "SHORT_TEXT": "耐力跑 | Endurance run",
                        "_DELETE": 1,
                        "_UPDATE": 1
                    },
                    {
                        "NODE_ID": "E2D0200A54ED24428EFE6F934C5DD98E",
                        "EXERCISE_TAG_ID": "2627B796433EBA4FA88003C14AA7B252",
                        "PARENT_NODE_ID": "F13E5CD37DF45E43B1F29E46536D2901",
                        "TYPE": "EX",
                        "SHORT_TEXT": "跨栏 | Hurdle jumps",
                        "_DELETE": 1,
                        "_UPDATE": 1
                    },
                    {
                        "NODE_ID": "16DE9DC506E1294EB9E144153568C154",
                        "EXERCISE_TAG_ID": "E20BF5E3021AE640B07A8B4990A4ABA1",
                        "PARENT_NODE_ID": "F13E5CD37DF45E43B1F29E46536D2901",
                        "TYPE": "EX",
                        "SHORT_TEXT": "障碍跑 | Parcours",
                        "_DELETE": 1,
                        "_UPDATE": 1
                    }
                ]
            },
            {
                "NODE_ID": "5B8049276F63BE43ACC0006085432C79",
                "EXERCISE_TAG_ID": "C65DB0A18103B94685A334C014FAE57B",
                "PARENT_NODE_ID": "9259411CB6F3AB41B5FBCDF8139A6E2B",
                "TYPE": "EX",
                "SHORT_TEXT": "4:3情形 | 4:3 situation",
                "_DELETE": 1,
                "_UPDATE": 1
            }
        ]
    },
    {
        "NODE_ID": "BCB86BE4983A3D45A2BA6151DC3544A1",
        "PARENT_NODE_ID": null,
        "ROOT_TAG_ID": "BCB86BE4983A3D45A2BA6151DC3544A1",
        "SEQUENCE_NUMBER": 20,
        "TYPE": "CAT",
        "SHORT_TEXT": "技术 | Technique",
        "EXERCISE_COUNT": 1,
        "_DELETE": 1,
        "_UPDATE": 1,
        "_ADD": 1,
        "_MANAGE_PERMISSIONS": 1,
        "nodes": [
            {
                "NODE_ID": "2FFA8FB663F13849AE74A3000582F650",
                "PARENT_NODE_ID": "BCB86BE4983A3D45A2BA6151DC3544A1",
                "ROOT_TAG_ID": "BCB86BE4983A3D45A2BA6151DC3544A1",
                "SEQUENCE_NUMBER": 10,
                "TYPE": "CAT",
                "SHORT_TEXT": "运球 | Dribbling ",
                "EXERCISE_COUNT": 2,
                "_DELETE": 1,
                "_UPDATE": 1,
                "_ADD": 1,
                "_MANAGE_PERMISSIONS": 1,
                "nodes": [
                    {
                        "NODE_ID": "170afdd50bc05d0aefb27a9af2ce5859",
                        "PARENT_NODE_ID": "2FFA8FB663F13849AE74A3000582F650",
                        "ROOT_TAG_ID": "BCB86BE4983A3D45A2BA6151DC3544A1",
                        "SEQUENCE_NUMBER": 10,
                        "TYPE": "CAT",
                        "SHORT_TEXT": "高速跑动时运球",
                        "EXERCISE_COUNT": 0,
                        "_DELETE": 1,
                        "_UPDATE": 1,
                        "_ADD": 1,
                        "_MANAGE_PERMISSIONS": 1,
                        "nodes": []
                    },
                    {
                        "NODE_ID": "5B8049276F63BE43ACC0006085432C79",
                        "EXERCISE_TAG_ID": "24EEB3FAF452C24F9B657A9082018DF4",
                        "PARENT_NODE_ID": "2FFA8FB663F13849AE74A3000582F650",
                        "TYPE": "EX",
                        "SHORT_TEXT": "4:3情形 | 4:3 situation",
                        "_DELETE": 1,
                        "_UPDATE": 1
                    },
                    {
                        "NODE_ID": "E2D0200A54ED24428EFE6F934C5DD98E",
                        "EXERCISE_TAG_ID": "34B51CF5D527A84B830CD9BA53ED6C3E",
                        "PARENT_NODE_ID": "2FFA8FB663F13849AE74A3000582F650",
                        "TYPE": "EX",
                        "SHORT_TEXT": "跨栏 | Hurdle jumps",
                        "_DELETE": 1,
                        "_UPDATE": 1
                    }
                ]
            },
            {
                "NODE_ID": "653D5DBD6DC1684DBA9B7144DE61376C",
                "PARENT_NODE_ID": "BCB86BE4983A3D45A2BA6151DC3544A1",
                "ROOT_TAG_ID": "BCB86BE4983A3D45A2BA6151DC3544A1",
                "SEQUENCE_NUMBER": 20,
                "TYPE": "CAT",
                "SHORT_TEXT": "传球 | Passing  ",
                "EXERCISE_COUNT": 3,
                "_DELETE": 1,
                "_UPDATE": 1,
                "_ADD": 1,
                "_MANAGE_PERMISSIONS": 1,
                "nodes": [
                    {
                        "NODE_ID": "5B8049276F63BE43ACC0006085432C79",
                        "EXERCISE_TAG_ID": "98A3668A698C914AB5D09D72CD4B687F",
                        "PARENT_NODE_ID": "653D5DBD6DC1684DBA9B7144DE61376C",
                        "TYPE": "EX",
                        "SHORT_TEXT": "4:3情形 | 4:3 situation",
                        "_DELETE": 1,
                        "_UPDATE": 1
                    },
                    {
                        "NODE_ID": "25257F98DFD0694F8E075989FFCC985B",
                        "EXERCISE_TAG_ID": "38D98A307CE9CC488D36EF1EC0E018E5",
                        "PARENT_NODE_ID": "653D5DBD6DC1684DBA9B7144DE61376C",
                        "TYPE": "EX",
                        "SHORT_TEXT": "压迫下进行传球 | Passing drill with opponents",
                        "_DELETE": 1,
                        "_UPDATE": 1
                    },
                    {
                        "NODE_ID": "1DF2A53268A77E428AF4C482D3582B37",
                        "EXERCISE_TAG_ID": "48B71F416045064FBFE43F869C69BA2D",
                        "PARENT_NODE_ID": "653D5DBD6DC1684DBA9B7144DE61376C",
                        "TYPE": "EX",
                        "SHORT_TEXT": "长传练习 | Long pass drill",
                        "_DELETE": 1,
                        "_UPDATE": 1
                    }
                ]
            },
            {
                "NODE_ID": "6662CC8805BB074D8CCC1FC866B1086D",
                "PARENT_NODE_ID": "BCB86BE4983A3D45A2BA6151DC3544A1",
                "ROOT_TAG_ID": "BCB86BE4983A3D45A2BA6151DC3544A1",
                "SEQUENCE_NUMBER": 30,
                "TYPE": "CAT",
                "SHORT_TEXT": "射门 | Shooting",
                "EXERCISE_COUNT": 1,
                "_DELETE": 1,
                "_UPDATE": 1,
                "_ADD": 1,
                "_MANAGE_PERMISSIONS": 1,
                "nodes": [
                    {
                        "NODE_ID": "555A6B5A58BD2B49ABDBC25DE6C6D189",
                        "EXERCISE_TAG_ID": "559B07B2692F7146B2D5F940297592C5",
                        "PARENT_NODE_ID": "6662CC8805BB074D8CCC1FC866B1086D",
                        "TYPE": "EX",
                        "SHORT_TEXT": "在守门员防守下射门 | Shooting on goal practice",
                        "_DELETE": 1,
                        "_UPDATE": 1
                    }
                ]
            },
            {
                "NODE_ID": "F646CAEF54D2644F92A3BE9603E62690",
                "PARENT_NODE_ID": "BCB86BE4983A3D45A2BA6151DC3544A1",
                "ROOT_TAG_ID": "BCB86BE4983A3D45A2BA6151DC3544A1",
                "SEQUENCE_NUMBER": 40,
                "TYPE": "CAT",
                "SHORT_TEXT": "传中   | Crosses",
                "EXERCISE_COUNT": 2,
                "_DELETE": 1,
                "_UPDATE": 1,
                "_ADD": 1,
                "_MANAGE_PERMISSIONS": 1,
                "nodes": [
                    {
                        "NODE_ID": "95D2CD8B79F6BC40A88B30B930B1E57E",
                        "EXERCISE_TAG_ID": "9CB3C1DA0B42D346B4CBE70503A41FF5",
                        "PARENT_NODE_ID": "F646CAEF54D2644F92A3BE9603E62690",
                        "TYPE": "EX",
                        "SHORT_TEXT": "sss",
                        "_DELETE": 1,
                        "_UPDATE": 1
                    },
                    {
                        "NODE_ID": "9F37BD348AB57F44B878A827522470A8",
                        "EXERCISE_TAG_ID": "B668952C7EDCD84F99F53B0FCFD47ECB",
                        "PARENT_NODE_ID": "F646CAEF54D2644F92A3BE9603E62690",
                        "TYPE": "EX",
                        "SHORT_TEXT": "角球传中 | Crosses from corner",
                        "_DELETE": 1,
                        "_UPDATE": 1
                    }
                ]
            },
            {
                "NODE_ID": "46C7118318EF0A4B815136C1223F5CD8",
                "EXERCISE_TAG_ID": "A4126CF01572DF47BAB8A8E285F42622",
                "PARENT_NODE_ID": "BCB86BE4983A3D45A2BA6151DC3544A1",
                "TYPE": "EX",
                "SHORT_TEXT": "测试01",
                "_DELETE": 1,
                "_UPDATE": 1
            }
        ]
    }
];
