

const todoList = [
    {
      title: '代辦事項一',
      status: '代辦',
      directions: 'Lorem ipsum dolor sit amet',
    },
    {
      title: '代辦事項二',
      status: '已完成',
      directions: 'Lorem ipsum dolor sit amet',
    },
  ];

  
localStorage.setItem('todoList', JSON.stringify(todoList));
//儲存物件（‘todolist')變成json格式JSON.stringify(todoList)


let todo = JSON.parse(localStorage.getItem('todoList'));
console.log(todo);

//本地儲存庫只認json所以把todolist的物件變成json後上傳到本地儲存庫
//當重新進入後要把儲存庫的資料再弄下來就得把儲存後的json再轉物件
//在印回去html

//JSON.parse轉換來自本地儲存庫的josn檔案變成物件