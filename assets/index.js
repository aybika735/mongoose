// Код для первого задания напиши в этой функции
// Для правильного прохождения тестов рекурсивно вызывайте эту функцию так: functions.crawlTree
// В функции crawlTree() можно использовать и рекурсию и циклы одновременно
// Так же в crawlTree нельзя использовать метод flat()
// let tree = [[[["П", "р"], "и"],["в", ["е", "т"]], ],[["и", "к"], "и"],];

function crawlTree(tree) {
    // let world = '';
   
        // return tree.join('').split(',').join(''); 
        let str = '';
        for (const elem of tree) { 
          if (typeof elem === 'object') { 
            str += crawlTree(elem);
          } else {
            str += elem;
          }
        }
        return str;
      
    }

console.log(crawlTree([[[["П", "р"], "и"],["в", ["е", "т"]], ],[["и", "к"], "и"]]));

// Код для второго задания напиши в этой функции
function twoSum() {



    
}

// Всё, что ниже, нужно для тестов. Не изменяй этот код
const functions = { crawlTree, twoSum };
module.exports = functions;

function crawlTree(tree) {
    
    let world = '';
    for (let j of tree ){
        if(typeof j==='object'){
            for(let sir of j){
                if(typeof sir=='object'){
                    for(let sin of sir){
                        if(typeof sin=='object'){
                            for(let el of sin){
                                world = world+el;
                            }
                        }else{
                     world = world+sin;
                    }
                    }
                }else{
                world=world+sir;
                }
            }
        }
    }
    return world;
  }
  console.log(crawlTree([[[["П", "р"], "и"],["в", ["е", "т"]]],[["и", "к"], "и"]]));
  public  Solution {
    public static String recursion(int n) {
        // Базовый случай
        if (n == 1) {
            return "1";
        }
        // Шаг рекурсии / рекурсивное условие
        return recursion(n - 1) + " " + n;
    }
    public static void main(String[] args) {
        System.out.println(recursion(10)); // вызов рекурсивной функции
    }
}