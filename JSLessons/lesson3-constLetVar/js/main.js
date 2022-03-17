// 1.Dəyişkən adları mənalı və anlaşıqlı olmalıdır.
// 2.Dəyişkən adlarını yazarkən İngilis əlifbasından başqa əlifadan istifadə etmək qadağandır.
// 3.Dəyişkən adları _ (alt xətt) ilə başlaya bilər.
// 4.Dəyişkən adları $(dollar) işarəsi ilə başlaya bilər.
// 5.Dəyişkən adları heç bir zaman rəqəm ilə başlaya bilməz.Amma ilk hərfdə sonra istifadə edə bilərik.
// 6.Dəyişkən adları böyük kiçik hərfləri anlayır.
// 7.Eyni dəyişkənə iki fərqli məlumat tanımlanan zaman sonuncu tanımlanan məlumatı göstərir.
// 8.JavaScript tərəfindən hazırlanmış rezerv kəlimələri dəyişkən adlarına vermək qadağandır.
// 9.Eyni dəyişkən adını dəişkən ifadələrində istifadə etmək qadağandır.

// abstract 	    arguments	    await*	            boolean
// break	        byte	        case	            catch
// char	            class*	        const	            continue
// debugger	        default	        delete	            do
// double	        else	        enum*	            eval
// export*	        extends*	    false	            final
// finally	        float	        for	                function
// goto	            if	            implements	        import*
// in	            instanceof	    int	                interface
// let*	            long	        native	            new
// null	            package	        private	            protected
// public	        return	        short	            static
// super*	        switch	        synchronized	    this
// throw	        throws	        transient	        true
// try	            typeof	        var	                void
// volatile	        while	        with	            yield

// variable - var (qlobal)
// constant - const (local)
// let - (local)
// gloabl
// if (true) {
//     // local global
//     let a = "Hello";
//     if (true) {
//         // local
//         console.log(a);

//     }
// }

// if - əgər
// else if - deyilsə əgər
// else - deyil

// const a = 10;
// const b = 1;

// if(a<b){
//     console.log("kicikdir");
// }else if(a>b){
// console.log("boyukdur");
// }else{
//     console.log("umumiyetce sehvdir");
// }

const myTime = 10;

if (myTime >= 5 && myTime < 13) {
  console.log("Good Morning");
  if (myTime == 7) {
    console.log("Get up");
  } else if (myTime == 10) {
    console.log("do breakfast");
  }
} else if (myTime >= 13 && myTime < 20) {
  console.log("Good afternoon");
} else if (myTime >= 20 && myTime <= 22) {
  console.log("Good evening");
} else if (myTime <= 23) {
  console.log("Good Night");
} else {
  console.log("no time");
}

const a = 10;
let b = 5;
switch (a) {
  case b+5:
    console.log("Salam");
    break;
  case 10:
    console.log(10);
    break;

  default:
    console.log(false);
}


try {
    throw "everything ok"
    consolae.log("hello");
} catch (err) {
    console.log(err);
    // console.log("Texniki xeta");
    
}finally{
    console.log("im running everytime");
}
