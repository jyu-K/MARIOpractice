//
//マップクラス
//
let stage = 3;
let fieldData = [
    [],//0は欠番
    /*[　//1
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,371,371,371,371,371,371,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,382,383,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,371,371,371,371,371,371,-1,-1,-1,368,-1,-1,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,382,383,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,416,417,418,-1,-1,-1,-1,451,452,453,-1,-1,-1,451,452,453,-1,-1,-1,451,452,453,-1,-1,-1,451,452,453,-1,-1,-1,451,452,453,-1,-1,-1,451,452,453,-1,-1,-1,451,452,453,-1,-1,-1,451,452,453,-1,-1,-1,451,452,453,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,-1,-1,-1,371,-1,-1,-1,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,371,-1,-1,-1,371,-1,-1,-1,371,-1,-1,-1,371,-1,-1,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,398,399,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,368,-1,-1,-1,-1,-1,-1,-1,410,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,432,433,434,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,-1,371,371,-1,-1,-1,371,-1,-1,-1,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,398,399,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,451,452,453,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,411,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,448,449,450,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,-1,-1,-1,371,371,-1,-1,371,371,-1,-1,-1,-1,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,382,383,-1,-1,-1,398,399,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,427,427,411,-1,-1,-1,-1,-1,-1,-1,416,417,418,416,417,418,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,-1,-1,-1,-1,371,-1,-1,-1,371,371,371,-1,-1,-1,-1,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,398,399,-1,-1,-1,398,399,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,478,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,426,426,427,427,411,-1,-1,-1,-1,-1,-1,432,433,434,432,433,434,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,410,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,410,-1,-1,-1,410,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,371,-1,-1,-1,-1,371,371,371,371,371,371,-1,-1,-1,-1,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,410,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,382,383,-1,-1,-1,-1,-1,398,399,-1,-1,-1,398,399,-1,-1,-1,-1,-1,-1,-1,-1,410,-1,-1,-1,-1,493,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,372,372,372,-1,368,371,368,371,368,-1,409,425,426,426,427,427,426,427,411,-1,-1,-1,-1,-1,448,449,450,448,449,450,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,411,-1,-1,-1,-1,-1,-1,-1,-1,-1,473,-1,79,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,503,504,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,411,-1,409,425,411,-1,-1,-1,-1,-1,-1,371,-1,-1,371,371,-1,-1,-1,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,411,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,368,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,398,399,-1,-1,-1,-1,-1,398,399,-1,-1,-1,398,399,-1,-1,-1,-1,-1,-1,-1,409,425,411,-1,-1,-1,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,473,-1,-1,-1,-1,-1,-1,-1,-1,
    382,383,-1,-1,382,383,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,426,426,426,426,426,426,427,427,411,-1,416,417,418,416,417,418,416,417,418,-1,-1,-1,382,383,-1,-1,-1,-1,-1,409,425,427,427,411,-1,-1,-1,-1,-1,-1,-1,473,490,473,95,-1,-1,-1,-1,-1,-1,-1,368,-1,-1,368,-1,-1,368,504,-1,368,-1,-1,368,-1,-1,368,-1,-1,368,504,368,-1,-1,-1,-1,-1,-1,-1,-1,409,425,427,427,409,425,427,427,411,-1,-1,-1,-1,-1,371,-1,371,371,371,-1,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,427,427,411,-1,-1,-1,-1,-1,368,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,382,383,-1,-1,-1,398,399,-1,-1,-1,-1,-1,398,399,-1,-1,-1,398,399,-1,-1,-1,-1,-1,-1,409,425,427,427,411,-1,-1,-1,494,-1,-1,-1,-1,-1,-1,-1,473,490,473,-1,-1,-1,-1,-1,-1,-1,
    398,399,-1,-1,398,399,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,427,427,426,427,427,426,427,427,426,427,411,432,433,434,432,433,434,432,433,434,-1,-1,-1,398,399,-1,-1,-1,-1,409,425,426,426,427,427,411,-1,-1,-1,-1,-1,475,474,491,476,489,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,426,426,409,425,426,426,427,427,411,-1,-1,-1,-1,-1,-1,371,371,371,-1,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,426,426,427,427,411,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,398,399,-1,-1,-1,398,399,-1,-1,-1,-1,-1,398,399,-1,-1,-1,398,399,-1,-1,-1,-1,-1,409,425,426,426,427,427,411,-1,-1,494,-1,-1,-1,-1,-1,-1,475,474,491,476,489,-1,-1,-1,-1,-1,-1,
    398,399,-1,-1,398,399,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,402,402,402,402,402,402,402,402,402,402,403,404,448,449,450,448,449,450,448,449,450,-1,-1,-1,398,399,-1,-1,-1,409,425,426,426,427,427,426,427,411,-1,-1,-1,-1,489,474,491,476,489,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,426,426,409,425,426,426,427,427,426,427,411,-1,-1,-1,-1,-1,371,371,371,-1,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,487,488,-1,-1,-1,-1,409,425,426,426,427,427,426,427,411,-1,-1,-1,-1,-1,-1,-1,507,508,509,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,507,508,509,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,398,399,-1,-1,-1,398,399,487,488,-1,-1,-1,398,399,-1,-1,-1,398,399,487,488,-1,-1,409,425,426,426,427,427,426,427,411,-1,494,-1,-1,-1,-1,-1,-1,489,474,491,476,489,-1,-1,-1,-1,-1,-1,
    400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,392,392,374,392,392,374,392,392,374,392,392,374,392,392,374,392,392,374,392,392,374,392,374,392,392,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,-1,-1,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,-1,-1,-1,-1,400,400,400,400,400,400,-1,-1,-1,400,400,400,400,400,400,400,400,-1,-1,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,-1,400,400,-1,-1,-1,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,
    400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,408,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,-1,-1,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,-1,-1,-1,-1,400,400,400,400,400,400,-1,-1,-1,400,400,400,400,400,400,400,400,-1,-1,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,-1,400,400,-1,-1,-1,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,400,
],
    [//2
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,478,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,493,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,419,419,419,419,419,419,419,419,419,420,421,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,435,435,435,435,435,435,435,435,435,436,437,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,-1,-1,-1,-1,-1,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,-1,-1,-1,-1,-1,-1,-1,372,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,410,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,371,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,-1,-1,-1,-1,-1,372,372,372,372,372,372,372,372,372,372,372,372,372,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,411,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,410,-1,-1,-1,-1,-1,371,371,371,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,371,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,372,-1,-1,-1,-1,-1,-1,372,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,372,-1,-1,-1,372,372,372,-1,-1,-1,372,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,426,427,411,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,411,-1,-1,-1,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,411,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,382,383,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,371,-1,371,-1,382,383,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,382,383,382,383,382,383,-1,402,403,402,403,404,403,404,402,403,404,-1,-1,-1,-1,-1,-1,372,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,372,372,-1,-1,-1,372,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,427,427,427,427,411,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,426,427,411,-1,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,426,427,411,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,371,-1,-1,-1,-1,-1,371,371,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,398,399,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,371,-1,371,-1,371,-1,398,399,-1,-1,-1,-1,-1,-1,-1,382,383,-1,-1,-1,-1,-1,-1,-1,-1,-1,398,399,398,399,398,399,-1,402,403,402,403,404,403,404,402,403,404,-1,-1,-1,-1,-1,-1,372,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,372,372,-1,-1,372,372,407,407,407,407,407,407,407,407,407,407,407,407,406,406,406,406,406,406,406,407,407,407,407,407,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,371,-1,371,-1,371,-1,371,371,371,371,371,371,371,371,371,398,399,371,371,371,371,371,371,371,371,371,398,399,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,371,371,371,371,371,-1,-1,-1,-1,-1,371,372,372,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,372,371,371,-1,-1,372,371,371,371,371,371,371,371,371,371,371,371,371,371,407,407,407,407,407,407,407,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,
],*/
[
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,478,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,493,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,-1,-1,371,371,-1,-1,-1,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,451,452,453,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,487,488,-1,-1,-1,-1,-1,-1,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,-1,-1,371,371,371,371,371,-1,-1,-1,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,419,419,419,419,419,419,419,419,419,420,421,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,503,504,-1,-1,-1,-1,-1,-1,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,-1,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,435,435,435,435,435,435,435,435,435,436,437,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,-1,-1,-1,-1,-1,372,372,372,372,372,372,372,372,372,372,372,372,372,372,372,-1,-1,-1,-1,-1,-1,-1,372,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,410,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,-1,371,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,-1,-1,-1,-1,-1,372,372,372,372,372,372,372,372,372,372,372,372,372,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,411,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,410,-1,-1,-1,-1,-1,371,371,371,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,-1,-1,-1,-1,-1,371,-1,371,-1,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,372,-1,-1,-1,-1,-1,-1,372,372,372,372,372,372,372,372,372,372,372,372,372,-1,-1,-1,372,372,372,-1,-1,-1,372,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,375,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,426,427,411,-1,390,390,390,-1,-1,390,390,390,-1,-1,-1,-1,409,425,411,-1,-1,-1,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,411,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,451,452,453,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,382,383,-1,-1,-1,-1,375,375,375,375,375,375,-1,-1,-1,-1,-1,-1,-1,-1,-1,382,383,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,382,383,382,383,382,383,-1,402,403,402,403,404,403,404,402,403,404,-1,-1,-1,-1,-1,-1,372,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,372,-1,-1,-1,-1,372,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,391,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    -1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,427,427,427,427,411,406,406,406,-1,-1,406,406,406,-1,-1,-1,409,425,426,426,411,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,409,425,427,427,411,-1,-1,-1,-1,-1,-1,371,-1,-1,-1,-1,372,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,372,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,398,399,-1,-1,-1,-1,391,391,391,391,391,391,-1,-1,-1,-1,-1,-1,-1,-1,-1,398,399,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,398,399,398,399,398,399,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,372,407,407,407,407,407,407,407,407,407,407,407,407,406,406,406,406,406,406,406,407,407,407,407,407,-1,494,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,
    371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,372,372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,371,371,371,371,371,371,371,371,371,371,392,392,392,392,392,392,392,392,392,392,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,398,399,398,399,398,399,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,-1,-1,371,371,371,371,371,371,371,371,371,371,371,-1,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,371,

]
];

//386番からのブロックタイプ
let blType = [
    1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,
    0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,
    1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,
    1,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,
    0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,
    0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,
    1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,
    1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,
];



class Field
{

    constructor()
    {
        this.scx = 0;
        this.scy = 0;
        
    }
    
    //ブロックかどうか返す
    isBlock(x,y)
    {
        
        let bl=fieldData[stage][(y>>4)*FIELD_SIZE_W+(x>>4)];
        
        if(bl<368)return 0;
        //console.log(bl);
        return blType[bl-368]==1?bl:0;
    }
    
    isGool(x,y)
     {
        
        let gl=fieldData[stage][(y>>4)*FIELD_SIZE_W+(x>>4)];
        //console.log(gl);
       
         
        if(gl==494 || gl==478)
        {
            return true;
        }
        else return false;
        
        //return blType[494]==2?gl:0;
         
    }
    //更新処理
    update()
    {
        if((ojisan.x>>4) > field.scx+(vcan.width/2)&&SGool==false)
        {
            field.scx = (ojisan.x>>4)-(vcan.width/2);
           
        }
        
        
    }
    
    //ブロック一つ描画
    drawBlock(bl,px,py)
    {
        const anim=[0,1,2,1,0,0];
        if(bl==368)bl+=anim[(frameCount>>3)%5];
        let sx = (bl&15)*16;
        let sy = (bl>>4)*16;
    
        vcon.drawImage(chImg,sx,sy,16,16,px,py,16,16);
    }
    
    
    
    draw()
    {
        for(let y=0;y<MAP_SIZE_H+1;y++)
        {
            for(let x=0;x<MAP_SIZE_W+1;x++)
            {
                let sx =x+ (this.scx>>4);
                let sy =y+ (this.scy>>4);
                let bl=fieldData[stage][sy*FIELD_SIZE_W+sx];
                let px = x*16-(this.scx%16);
                let py = y*16-(this.scy%16);
                if(bl>=0)this.drawBlock(bl,px,py);
            }
        }
        
        
        
    }
}
