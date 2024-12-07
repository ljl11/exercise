function bubbleSort(array) {
  for (let i = 1; i < array.length; i++) {
    // 一轮下来，最末尾的元素一定是最大的, 前面不一定是有序的
    let needNextPass = false;
    for (let j = 0; j < array.length - i; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1); // 相邻的在比较
        needNextPass = true; // 如果相邻的两两比较都不需要发生交换说明已经是有序的
      }
    }
    if (!needNextPass) {
      break;
    }
  }
}

function swap(array, i, j) {
  array[i] = array[i] - array[j];
  array[j] = array[j] + array[i];
  array[i] = array[j] - array[i];
}

// [1, 5, 2, 8, 10]
function bubbleSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let needNextPass = false;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        needNextPass = true;
      }
    }
    if (!needNextPass) {
      break;
    }
  }
}

function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i - 1;
    while (j >= 0 && array[j] > array[i]) {
      array[j + 1] = array[j];
      j--;
    }
  }
  array[j + 1] = array[i];
}

function quickSort(array, first, last) {
  if (first < last) {
    treeQuickSort(array, first, last);
  }
}

[2,0,2,1,1,0]
function treeQuickSort(array, first, last) {
  const pivot = 1
  let lt = 0; // 基准的左边界，
  let gt = array.length; // 基准的右边界
  let i = 0; // i 从左向右扫描，直到 i = gt，说明 gt 之后的都是大于 pivot 的，之前都是小于的，为什么？因为i向 gt 靠近之前肯定都比较过了要是大于 pivot 都放入 gt 右边了
  // 当出现 array[i] = pivot，lt 不会移动， i 会移动, 所以这里判断的是 i 和 gt 是否相等 而不是 lt 和 gt
  while( i<= gt) {
    if(array[i] < pivot) {
      // 插入在 lt 之前
      [array[lt], array[i]] = [array[i], array[lt]]
      lt++;
      i++;
    }
    if(array[i] == pivot) {
      i++
    } else {
      // 插入在 gt 之后
      [array[gt], array[i]] = [array[i], array[gt]]
      gt--;
    }
  }
}

function selectionSort(array) {
  // 把第 i 个元素作为比较对象，和 i + 1 ~ n 元素进行比较，记录最小元素的下标为 minIndex 与 i 交换
  // 保证 第 i 个元素是最小的
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      let minIndex = i;
      // 这里要找出最小的所以需要 array[minIndex] 作为 flag 进行比较
      if (array[minIndex] > array[j]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      swap(array, i, minIndex);
    }
  }
}

//从第二个数开始，和前面已有序的数组的元素进行比较，从右往左比，指针向前移动，如果当前元素比已有序数组的元素小，说明当前元素需要插到数组里，有序数组的元素需要往后移动一位，把位置给他空出来
// 直到当前元素 大于等于 有序数组的某个元素，就直接把当前元素放进之前留出来的位置 即可
function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    let preIndex = i - 1; // 从后往前进行比较，直到第0个元素
    let current = array[i]; // 比较的 flag, 把这个插入到已有序数组(0 ~ i-1)的合适位置
    while (preIndex >= 0 && array[preIndex] > current) {
      array[preIndex + 1] = array[preIndex]; // 这里有个疑问就是 array[preIndex + 1] 的值被覆盖了怎么办，不担心既然 array[preIndex] > flag 这是一个有序数组说明 array[preIndex + 1]肯定也是大于 flag 肯定也往后面移动了一位
      preIndex--; // 指针向前移动
    }
    // 循环退出的时候说明 flag 已经 > preIndex && < preIndex + 1,  preIndex + 1 的元素已经空出来，整个向后移动了一位，直接把 flag 放入 preIndex + 1 即可
    array[preIndex + 1] = current;
  }
}

function mergeSort(arr) {
  const length = arr.length;
  if (length > 1) {
    const leftArray = mergeSort(arr.slice(0, length / 2));
    const rightArray = mergeSort(arr.slice(length / 2));
    // 最后合成一个数组时需要用On(n)
    // 之前递归调用完了，空间也就释放了
    console.log("after sort", leftArray, rightArray);
    const mergedArray = merge(leftArray, rightArray);

    return mergedArray;
  }
  return arr;
}

function merge(left, right) {
  let leftIndex = (rightIndex = 0);
  const mergedArray = [];
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      mergedArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergedArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < left.length) {
    mergedArray.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    mergedArray.push(right[rightIndex]);
    rightIndex++;
  }
  console.log("after merge", mergedArray);
  return mergedArray;
}

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2); // 中间作为基准值
  const pivot = array.splice(middle, 1)[0]; // 删除中间这个元素，并且存储 splice 返回的被删除的元素
  const left = [];
  const right = [];
  // 这里需要重新计算 length，因为之前有删除的了
  for (let i = 0; i < array.length; i++) {
    if (array[i] <= pvoke) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }
  // 左边有序+中间+右边有序
  return quickSort(left).concat(pvoke, quickSort(right));
}

function sortArray(arr) {
  return quickSort(arr, 0, arr.length - 1);
}

function quickSort(arr, first, last) {
  if (first < last) {
    let pivotIndex = partition(arr, first, last);
    quickSort(arr, 0, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, last);
  }
  return arr;
}
//low 和 high双向指针
function partition(arr, first, last) {
  // Math.random  返回 0~1, 0 的话  randomIndex = 0 + first,  1 的话， randomIndex = last 其余在中间
  const randomIndex = Math.floor(Math.random() * (last - first + 1)) + first;
  [arr[randomIndex], arr[last]] = [arr[last], arr[randomIndex]]; // 解构赋值交换两个元素的顺序hhh 还需要写什么 swap
  var pivot = arr[last];
  var low = first;
  var high = last;
  while (low < high) {
    while (low < high && arr[low] <= pivot) {
      low++;
    }
    //大于的放右边
    arr[high] = arr[low];
    while (low < high && arr[high] > pivot) {
      high--;
    }
    // 小于的放左边, low 代表指针移动过程中，小于 pivot 的下标
    arr[low] = arr[high];
  }
  // low == high 说明 low high 左边的都是小于= 右边的都是 大于 放在中间就行
  arr[low] = pivot;
  // console.log("after partition", arr, low);
  return low; // 返回中间元素的下标
}

// [5, 2, 3, 1][(5, 2, 3, 5)][(1, 2, 3, 5)];

// lt 基准区域的左边界下标
// gt 基准区域的右边界下标
// 访问到的当前下标

function sortArray(arr) {
  return treeQuickSort(arr, 0, arr.length - 1);
}

function treeQuickSort(arr, low, high) {
  if (low < high) {
    const randomIndex = Math.floor(Math.random() * (high - low + 1) + low);
    const pivot = arr[randomIndex];
    [arr[randomIndex], arr[low]] = [arr[low], arr[randomIndex]];
    let lt = low;
    let gt = high;
    // 小于 --- lt ====基准区域=====-----gt 大于
    let i = low + 1; // i 一直向后移动，
    while (i <= gt) {
      // arr[lt] 始终等于 pivot, lt 下标以及左边边的元素 <= pivot
      // gt 下标以及右边的元素 >= pivot, 因为每次比较都会把 > pivot 交换到右边，gt 向前移一位
      // gt 和 i 重合，说明已经把大于 pivot 的都放好了，gt 以及之后的元素肯定大于 pivot，前面不会再有 <=，因为是 i 是从左往右比较的，有的话早就换到 gt 之后了

      if (arr[i] < pivot) {
        // 总是跟 arr[lt] 的进行交换
        // 小于 pivot 时进行交换，这样能保证 lt 左边的元素都是小于 pivot
        [arr[lt], arr[i]] = [arr[i], arr[lt]];
        i++; // 交换后 arr[i] => arr[lt] => pivot, 和 pivot 相等，无需移动直接+1比较下一个元素
        lt++; // lt 向后移动一位，因为发生了交换，lt位置上的元素被其他填充了，需要向后移动一位留出这个位置
      } else if (arr[i] > pivot) {
        [arr[gt], arr[i]] = [arr[i], arr[gt]];
        gt--; // i此时不需要移动因为和 arr[gt] 交换后 arr[i] 元素发生了变化如果移动将会漏掉元素比较
      }
      // 相等说明不需要进行移动 lt 放在那里就行，只需要移动当前下标比较下一个元素
      else {
        i++;
      }
    }
    // 这里减少了很多 lt 到 gt 基准区域元素相同重复的情况，跟基准元素相同不需要再进行比较
    // lt 和 gt 减少了很多次不必要的栈调用
    treeQuickSort(arr, low, lt - 1);
    treeQuickSort(arr, gt + 1, high);
    return arr;
  }
  return arr;
}

nums = [2, 0, 2, 1, 1, 0];
[2, 0, 1];
1, 0, 2;

// 因为这里只有 0,1,2 三种数，所以 1 的左边全是 0，右边全是 2 不用再继续递归子数组排序了
function sortColors(arr) {
  const length = arr.length;
  if (length === 1) {
    return arr;
  }
  const high = length - 1;
  const pivot = 1;
  // 小于 --- lt ====基准区域=====-----gt 大于
  let i = 0;
  let lt = 0; // 小于 pivot 得放到 low 左边去啊
  let gt = high; // 大于 pivot 得放到 low 右边去啊
  while (i <= gt) {
    if (arr[i] < pivot) {
      [arr[lt], arr[i]] = [arr[i], arr[lt]];
      lt++;
      i++;
    } else if (arr[i] > pivot) {
      [arr[gt], arr[i]] = [arr[i], arr[gt]];
      gt--;
    } else {
      i++;
    }
  }
  return arr;
}
1->2->3-4->5
4-3-2-1
{val, next}

cur = 1
pre = null
next = 2

next = 3
pre = 1
cur = 2
2.next = 1

next = 4
pre = 2
cur = 
3.next = 2

next = null
pre = 3
cur = 4
4.next = 3


var reverseList = function(head) {
  const array = []
  let cur = head
  let pre = null
  let next = cur.next
  while(next) {
    pre = cur
    cur = next
    next = next.next
    cur.next = pre
  }
  return cur
};

40
[10,20, 30, 40]
[6 ,1, 1, 1]
       
10 30  30  30
60 80  80  80

       10  10
       60  60

   10  40  40
   60  90  90

0  20  20  20
0  20  20  20

   0   30  30
   0   30  30
      
       0   40
       0   40

// w = [] 每件物品的重量
// v = [] 每件物品的价值
// c 背包重量
// w[i] * v[i] * num 求和最大 && w[i] 求和 <= c
// num = 0 or num = 1
// return [] 每件物品的数量

dp[0][0]
dp[0][capacity] = 0
dp[1][0]
dp[n][0] = 0


// 状态定义：使用 dp[i][j] 表示前 i 个物品在容量为 j 的背包中能够达到的最大价值。
// 状态转移：
// 如果不选择第 i 个物品：dp[i][j] = dp[i -1][j]
// 如果选择第 i 个物品：dp[i][j] = dp[i -1][j - weight[i]] + value[i]
// -需要确保 j - weight[i] 大于等于0。


function knapsack(w, v, capacity) {
  let length = w.length
  if(length === 0) {
    return 0
  }
  // 第 j 个 array.length = j + 1
  const dp = new Array[length + 1].fill(0).map(v => (new Array[capacity + 1].fill(0)));
  for(let i = 0; i < dp.length) {
    for(let j = 0; j < dp[0].length; j++) {
      if(j - w[i-1] >=0) {
        // 一共容量是 j，所以前 i-1 个物品能放的容量最多为 j - weight, 加上 weight 刚好是 j
        // 也可以不放因为要最大值，就是需要比较放入第 i 个物品 和 不放第 i 个物品时哪个更大
        dp[i][j] = Math.max(dp[i-1][j], dp[i-1][j - w[i-1]] + v[i-1])
      } else {
        // 处理容量放不下第 i 个物品的情况, 最大价值为前 i - 1个物品放入容量为j的价值
        dp[i][j] = dp[i-1][j]
      }
    }
  }
  return dp[length][capacity]
}

输入：nums = [1,5,11,5]
输出：true  
解释：数组可以分割成 [1, 5, 5] 和 [11] 。
和为 s, 子集为  s/2
我们使用一个布尔数组 dp[j] 来表示是否可以用子集的元素组成和为 j
i 代表遍历的每一个元素下标

dp[j] = dp[j] || dp[j - nums[i]] 对于数组每一个元素有选和不选两种情况
- 选，剩余的为 dp[j - nums[i]] 在已经遍历的元素中看是否有能组成和为 j - nums[i] 的子集元素
- 不选 剩余为 j, 在已经遍历的元素中看是否有能组成和为 j 的子集元素
动态规划的解题思路
1、首先确定取值范围
j 最大为 s 这是我们的目标
j 最小为 nums[i] 因为 j < nums[i] 是无意义的肯定选不了当前元素 


2、然后确定当前元素 选和不选和之前遍历到的元素的关系等式
对于每一个 j, i,
选当前元素 i, dp[j] 想要为 true 的条件是存在 前 (i-1)个元素 能有子集组成 j-nums[i] 
不选当前元素 i, dp[j] 想要为 true 的条件是存在 前 (i-1)个元素 能有子集组成 j




s=5
dp[5] = dp[5] || dp[3] // false
dp[4] = dp[4] || dp[2] // false
dp[3] = dp[3] || dp[1] // true 
dp[2] = true // 选当前元素何为 2
dp[]

dp[5] = dp[2] // true 选当前为 3 剩余为 2
dp[4] = dp[1] // true
dp[3] = true

dp[5] = true
dp[4] = true

function canPartition(nums) {
  const total = nums.reduce((pre, cur) => pre+ cur, 0)
  const s = total / 2
  // total 必然为整数
  if(s %1 !==0) {
    return false
  }
  const dp = new Array(s+1).fill(false)
  dp[0] = true
  for(let i = 0; i< nums.length; i++) {
    for(let j = s; j>=nums[i] ; j--) {
      // 选 nums[i] 子集剩余的和为 dp[j - nums[i]] 不选就是 dp[j]
      dp[j] = dp[j] || dp[j - nums[i]]
    }
  }
  return dp[s]
}



避免重复计算：
for(let j = target, j<=nums[i];j--)
dp[4] = dp[3] 
dp[3] = dp[2] // 2 比 4 小
dp[2] = dp[1] // 1 比 3 小
dp[1] = true 
// 从大到小，j--遍历，dp[j-nums[i]],  j-nums[i]<j<前面遍历到的j
// j-nums[i] 和前面遍历到 j 没有交集
// 不会重复使用本轮算出的 dp[j]

for(let j = nums[i], j<=target;j++)
dp[5] = true
dp[6] dp[5] // 重复使用了
// 从小到大，j++遍历   j>前面遍历到的j， j> j-nums[i] 
// j-nums[i] 和前面遍历到 j 可能存在交集
// 可能会重复使用本轮算出的 dp[j], 造成重复使用该数
 



// 状态定义：使用 dp[j] 表示为在容量为 j 的背包中能够达到的最大价值。
// 状态转移：
// 如果不选择第 i 个物品：dp[j] = dp[j]
// 如果选择第 i 个物品：dp[j] = dp[j - weight[i-1]] + value[i-1]
// max(dp[j], dp[j - weight[i-1]] + value[i-1])
// -需要确保 j - weight[i] 大于等于0。
// j 为 w[i] 到 capacity
// 0-1 物品只能选择一次

40
[10, 20, 30, 40]
[60 ,20, 30, 40]

w[i] = 10 时
dp[40] = 60
dp[30] = 60
dp[20] = 60
dp[10] = 60

w[i]= 20
dp[40] = Math.max(60, dp[20] + 20) = 80
dp[30] = Math.max(60, dp[10] + 20) = 80
dp[20] = Math.max(60, dp[0] + 20) = 60

w[i]= 30
dp[40] = Math.max(80, dp[10] + 30) = 90
dp[30] = Math.max(80, dp[0] + 30) = 80

w[i]= 40
dp[40] = Math.max(80, dp[0] + 40) = 80

function knapsack(w, v, capacity) {
  let length = w.length
  if(length === 0) {
    return 0
  }
  // 第 j 个 array.length = j + 1
  const dp = new Array[capacity + 1].fill(0);
  for(let i = 0; i < w.length) {
    for(let j = dp.length; j >= w[i]; j--) {
      dp[j] = Math.max(dp[j], dp[j - w[i]] + v[i])
    }
  }
  return dp[capacity]
}





假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

 

示例 1：

输入：n = 2
输出：2
解释：有两种方法可以爬到楼顶。
1. 1 阶 + 1 阶
2. 2 阶
示例 2：

输入：n = 3
输出：3
解释：有三种方法可以爬到楼顶。
1. 1 阶 + 1 阶 + 1 阶
2. 1 阶 + 2 阶
3. 2 阶 + 1 阶

dp[j] 表示爬 j 步有多少种办法
n = 4
1 1

2 2
var climbStairs = function(n) {
  const dp = new Array(n + 1).fill(0)
  dp[1] = 1;
  dp[2] = 2;
  for(let i = 3; i<=n; i++){
    dp[i] = dp[i-2] + dp[i-1];
  }
  return dp[n]
};

//5 6 3 -7 -8  1 4, -1  n sum 4 n 2
[5,6,3,-7,-8,1,4,-1]
[], [5]
[] [6] [5, 6]
// 这个适用范围最广，还可以运运行有负值
// [10,1,2,7,6,1,5]
function combinationSum2(nums, sum) {
  const rs = new Set()
  back(nums, sum, 0, [])
  function back(nums, sum, index, subSequence) {
    if(index == nums.length) {
      return
    }
    // 满足和为 sum, 说明可以构成一个组合
    if(sum - nums[index] === 0) {
      const newCombo = [...subSequence, nums[index]].sort((a, b) => a - b);
      const newComboStr = JSON.stringify(newCombo); // 将数组转换为字符串
      rs.add(newComboStr, newCombo)
    } 
    // 已经找到仍然需要继续探测后面还有没有组合可能，否则到这里分支就断了
    back(nums, sum - nums[index], index+1, [...subSequence, nums[index]])
    back(nums, sum, index+1, subSequence)
  }
  const combination = Array.from(rs).map(JSON.parse);
  // console.log(combination)
  return combination
}


index = 0 ,level = 0, [1] // 第1层选择1
index = 1, level = 1 [1, 1] // 第2层选择1
index = 1, level = 1 [1] // 第2层不选择1
index = 2, level = 1  [1] // nums[2] > 1 , 第二层什么也不选择返回
index = 0, level = 0 [] // 第1层不选择1
index = 1, level = 0 // 第1层已经选过1了，第1层不再重复选1
index = 2, level = 0 [2] // 第1层选2
index = 2, level = 0 [] // 第一层不选 2



//1,1,2,2,2,3,4,4,4
[2] // index = 2, startIndex = 2, 前序是 [] 同层第一次选 2 
[2] // index = 3 ,startIndex = 2  前序是 [] 同层非第一次选 2 
[2] // index = 4 ,startIndex = 2   前序是 [] 同层非第一次选 2 
// 这三种只选1种就好, 

[x,2] // index = 2, startIndex = 2 
[x,2] // index = 3 ,startIndex = 2 // index = 3 可以和 index = 2在同层存在两种选择，肯定是第二层时，在 index = 2 没有选择时再选择 index = 3, 所以 startIndex = startIndex
[x,2] // index = 4 startIndex = 2
// 这三种只选1种就好, 但是和[2, 2] 不是重复的
[2, 2]  // index = 2, startIndex = 2 // 这种肯定是在第一层选了2的基础上，第二层的 startIndex  = 第一层的 startIndex + 1
// 对于每一个 nums【index]，都有两种 两种情况，对 nums[index + 1] 的影响是
// nums【index] 选择，到下一层的 nums[index+1] 的 startIndex = index + 1
// nums[index]，还是同层到 nums[index+1] 的 startIndex = index
// nums[index]，还是同层到 nums[index+2] 的 startIndex = index

[x,x,2] // index = 2, level = 2
[x,x,2] // index = 3 ,level = 2
[x,x,2] // index = 4 level = 2
// 这三种只选1种就好, 但是和[x, 2, 2] 不是重复的

[x,x,x,2] // index = 3 ,level = 3
[x,x,x,2] // index = 4 level = 3
// 这2种只选1种就好, 但是和[x,x,2, 2] 不是重复的

// level <= index

[2, 2] // index = 3, level = 1  //第一个2为 index= 2
[2, 2] // index = 4, level = 1 //第一个2为 index=  2
[2, 2] // index = 4, level = 1 //第一个2为 index= 3
// 这3种只选1种就好, 

[x, 2, 2] // index = 3, level = 2 //preIndex= 2
[x, 2, 2] // index = 4, level = 2  // preIndex = 2
[x, 2, 2] // index = 4, level = 2 // preIndex =  3
// 这3种只选1种就好, 

[x, x,  2, 2] // index = 3, level = 3  // preIndex= 2
[x, x,  2, 2] // index = 4, level = 3  // preIndex= 2
[x, x,  2, 2] // index = 4, level = 3  // preIndex= 3
// 这3种只选1种就好

[1,1,1,1]
[1]  index = 0, level = 0 
[1]  index 1, level = 0
[1]  index 2, level = 0
[1]  index 3, level = 0

[1,1] pre = 0, index = 1, level = 1 // 0,1
[1,1] pre = 0, index = 2, level = 1 // 0,2
[1,1] pre = 0, index = 3, level = 1 //0,3
[1,1] pre = 1, index = 2, level = 1 // 1,2
[1,1] pre = 1, index = 3, level = 1 
[1,1] pre = 2, index = 3, level = 1

[1,1,1] pre = 1, index = 2, level = 2  0,1,2
[1,1,1] pre = 1, index = 3, level = 2  0,1,3
[1,1,1] pre = 2, index = 3, level = 2  1,2,3

[1,1,1,1] pre = 2, index = 3, level = 3



let cur = index
     let pre = level // 因为相同元素会相邻
     while (cur>=1 && cur <nums.length && nums[pre] === nums[cur] && cur > level) {
      cur++;
    }


//[1,1,1,3,3,3]
[1,1] pre = 0, index = 1, level = 1 // 0,1

[1,1,1] index = 2   level = 2
[1,1,3] index = 3, level = 2

[1,1,3,3] index = 4, 首次 startIndex = 4
[1,1,3,3] index = 5, 非首次  startIndex = 4

[1,1,1,3,3] index = 4, 首次  startIndex = 4
[1,1,1,3,3] index = 5, 非首次  startIndex = 4


// startIndex 用来表示当前层是从哪个元素开始选择的
// startIndex  === index, 说明 nums[index] 对于 当前层来说是首次选择
// startIndex <== index, 说明 nums[index] 对于 当前层来说不是首次选择
// nums【index] 选择，当前层 startIndex = index, 到下一层的 nums[index+1] 的 startIndex = index + 1
// 不选nums[index]，还是同层到 nums[index+1] 的 startIndex = index 首次
// 不选nums[index]，不选 nums[index + 1] 还是同层到 nums[index+2] 的 startIndex = index 非首次 (区别 level，只要不选level不会加 1, level 很难判断是不是首次选择)
let cur = index
let pre = level // 因为相同元素会相邻

// 非首次选择重复元素
while (startIndex < index && nums[index - 1] === nums[index]) {
 cur++;
}

function combinationSum2(nums, sum) {
  const result = [];
  nums.sort((a, b) => a - b);   // 排序使得相同的元素相邻 
  backtrack(nums, sum, 0, [], 0)
  function backtrack(nums, remaining, index, subSequence, startIndex) {

    // 满足剩余和为 sum, 说明可以构成一个组合
    if(remaining == 0) {
      result.push([...subSequence])  // 通过跳过重复元素选择可以保证不会出现重复组合
      //console.log('找到组合', rs)
      return
    } 

     // 避免在同一层选择相同的元素， startIndex 代表该层首次选择的位置
     // 非首次选择相同元素需要跳过避免重复
     let curIndex = index
     //console.log('未跳过同层重复元素之前, 当前startIndex为', startIndex, 'index 为', curIndex)
     while (startIndex < curIndex &&  0 < curIndex && curIndex < nums.length && nums[curIndex - 1] === nums[curIndex]) {
      curIndex++;
     }

    //console.log('跳过之后, 当前startIndex为', startIndex, 'index 为', curIndex)

    if(curIndex === nums.length) {
      return
    }

    // 后续的会更大，不能满足剩余和
    if(nums[index] > remaining) {
      return 
    }

    subSequence.push(nums[curIndex]); 
    // 选当前元素
    backtrack(nums, remaining - nums[curIndex], curIndex+1, subSequence, curIndex + 1)
    // 不选当前元素
    //console.log('不选择当前元素为', nums[index], '剩余和为', sum, '构成的序列为', subSequence, '下一层级为', level)
    // 回溯，移除当前元素 
    subSequence.pop();
    backtrack(nums, remaining, curIndex + 1, subSequence, curIndex)
  }
  return result
}

// index 决定的是 com[index] 的元素
// i 决定的是 nums[i]
//  [1,1,2]
// index = 0,  i= 0, back(nums, 1, 1, [1]);  // 第一层选择第一个 1, 决定的是 com[0], 进入第二层
// index = 1,  i = 1, i === 1, 第一层选了一个 1，第二层可以继续选一个 1, [1, 1] back(num, 0, 2, [1,1]) 进入下一层
// index == i, 说明是本层的第一次选择, 这是第二层，决定的是 com[1]
// index = 2, sum = 0 说明已经找到了这个组合, 加入 rs
// 回到 第二层，index = 1, i = 2, back(num, 0, 2, [2]),进入下一层 com = [undefined, 2]
// index = 2, sum = 0 说明已经找到了这个组合, 加入 rs, 
// 回到第二层 i = 3 == length 
// 回到第一层，index = 0, i = 1, nums[i] === nums[i -1] 第一层时, 已经选择了 nums[0]=1 com[0]= 0，这是还是第一层，这里跳过选择相同的 nums[1],不然就是重复的组合, com[0] 还是 为 0
// index = 0, i = 2, back(num, 0, 2, [2]), 进入下一层
// index = 1, i = 3, sum = 0 说明已经找到了这个组合, 加入 rs, com = [2]


// ‌第一层选择了2‌：

// 这意味着在递归的第一层（也就是最顶层），我们选择了数组中的元素2作为组合的一部分。
// 接下来，递归会继续在剩余的数组元素中进行，尝试找到其他能与2组合起来达到目标和的元素。
// ‌第一层不选择1，第二层选择2‌：

// 在这种情况下，我们在递归的第一层跳过了元素1。
// 然后，在递归的第二层（也就是进入下一个递归调用时），我们选择了元素2。
// 这与第一层直接选择2是不同的，因为在这两种情况下，后续可选的元素集合是不同的。在第一层选择2之后，2就从剩余元素中移除了；而在第一层不选择1的情况下，2仍然在第二层可选。
// [2, xxx] 后续里 2 不能选了
// [] 第二种可以选 2， 也可以不选 2 产生的路径跟 [2,xx] 开头的是不一样的
// 最后会产生相同的组合，但是搜索路径不一样, 应该在加入时去重

function combinationSum2(nums, sum) {
  const result = [];  
  // 排序数组以便于剪枝 
  nums.sort((a, b) => a - b);   // 排序使得相同的元素相邻 
  // 启动回溯函数 
  backtrack(nums, sum, 0, []);  
  function backtrack(nums, remaining, index, subSequence) {  
  // 如果当前和为零，保存组合 
  if (remaining ===0) {
    result.push([...subSequence]);  
  return;  // 找到组合后直接返回 
  }
  // 遍历元素 
  for (let i = index; i < nums.length; i++) {
    // 剪枝：当前元素大于剩余和，结束递归 
    if (nums[i] > remaining) break;

    // 防止在同一层中选择相同的元素, 产生相同的组合, 剪枝
    if (i > index && nums[i] === nums[i -1]) {  
     continue; 
    }
   
    //递归选择当前元素
    backtrack(nums, remaining - nums[i], i +1, [...subSequence, nums[i]]);  
    // 这个调用完后继续 for 循环  back(i+1), sum 没减少，i 变为 i+1 相当于在 sum - 0, 不选择当前元素
    } 
}   
  return result;  
 }  



// 因为可能会产生负数，数组下标会越界所以用 map 保存
function findSolution(nums, sum, n) {
  const dp = new Array(sum + 1)
  for(let i = 0; i < nums.length;i++) {
    for(let j = sum;j >= nums[i]; j--) {
      const remaining = j - nums[i]
      if(remaining === 0) {
        const rs = [nums[i]]
        if(dp[j]) {
          dp[j] =  deduplicate[...dp[j], rs]
        } else {
          dp[j] = [rs]
        }
        //console.log('remaining === 0', '当前元素为', nums[i], 'target 为', j, 'dp[j]为', dp[j])
      }
      else if(dp[remaining]) {
        const oldRemainingValue = dp[remaining]
        const newValue = oldRemainingValue.map(v => {
          return [...v, nums[i]]
        })
        const originalRs = dp[j]
        const newRs = originalRs ? [...originalRs, ...newValue] : newValue
          dp[j] = deduplicate(dp[j])
        //console.log('remaining 为', remaining, '当前元素为', nums[i], 'target 为', j, 'dp[j]为', dp[j])
      }
      //console.log('当前元素为', nums[i], 'target 为', j, 'dp[j]为', dp[j])
    }
  }
  

  const allSolutions = dp[sum]

   // 会产生重复组合，如何去重 ？ 长度不同肯定不重复
  // 相同长度可能重复, 组合 length 作为 key
  //使用 Set 去重：在处理新组合后，将组合排序后 JSON.stringify 成字符串存入 Set，以确保组合唯一性。
  // [1, 6] 和 [6, 1] 是相同的组合
  return allSolutions || []

}

// 这种只适合于元素为正数，所有元素 >=0 比如 [-1, 6] target = 5 只能计算 5 以下的，这样会找不到 dp[6] 然后计算失败

function deduplicate(arr) {
  const existingMap = new Map();
  arr.forEach(combo => {
    const sortedCombo = combo.slice().sort((a, b) => a - b);
    const key = sortedCombo.join(',');
    if (!existingMap.has(key)) {
      existingMap.set(key, sortedCombo);
    }
  });
  return Array.from(existingMap.values());
}



// 示例用法
const nums = [2, 3, 6, 7];
const sum = 9;
const result = findSolution(nums, sum);
console.log(result);

//[10,1,2,7,6,1,5] target = 8
[1, 7] // 第一个 1 和 7
[7, 1] // 第二个 7  和 1
// [1,1,2,5,6,7,10] 
// 组合的重复来源于元素的重复

function combinationSum2(nums, target) {
  nums.sort((a, b) => a - b); // 排序数组
  const dp = Array(target + 1).fill(0).map(() => new Set());
  dp[0].add(JSON.stringify([])); // 初始化和为0的组合，即空组合

  for (let i = 0; i < nums.length; i++) {
      for (let j = target; j >= nums[i]; j--) {
          // 对于dp[j - nums[i]]中的每个组合，添加nums[i]生成新的组合
          for (const comboStr of dp[j - nums[i]]) {
              const combo = JSON.parse(comboStr); // 解析字符串为数组
              const newCombo = [...combo, nums[i]];
              const newComboStr = JSON.stringify(newCombo); // 将数组转换为字符串
              // 使用Set和字符串化数组自动去重
              dp[j].add(newComboStr);
          }
      }
  }

  // 将Set中的字符串化组合转换回数组形式并返回
  return Array.from(dp[target], comboStr => JSON.parse(comboStr)) || [];
}


{element: 2, 
  left: {element: 3, 
    left: {element: 4}, 
    right : {element: 1, right: {element: 0}}}, 
  right: {element: 1}}
234101
431021
401312
[2] // 2
[1, 3] 
[1,1,4] // 3
[1, 1] // 4
[1, 0] // 1
[1] // 0
[] // 1


[2,3, 4]
[2,3] // 4
 [2] //3
 [2, 1] // 1
 [2, 0] // 0
 [] // 2
 [1] // 1
[2]
[2, 1, 3, 4]
[2, 1, 3] // 4
[2, 1 , 3, ] //

// 前序 root->right->left 出栈的顺序就是访问的顺序，访问 root, root 出栈，right 入栈，left 入栈
// left 出栈，right 出栈

// 非递归版中序遍历，先左-根-右，按照先进后出的顺序，必须所有的左节点都入栈之后才能开始出栈，需要一个指针先把所有访问到的左节点，push(curNode)
// 直到某个节点下无左孩子节点时，就可以出栈打印, 继续访问它的右孩子节点，以它为根节点，继续左访问，然后右访问
function dfs(root){
  const stack = new Array()
  if(!root) {
    return
  }
  let curNode = root
  while(stack.length || curNode) {
    if(curNode) {
      stack.push(curNode)
      curNode = curNode.left
    } else { 
      // curNode 为 中序遍历访问到的节点，全都入栈，先一直访问左节点
      // 直到 curNode 为 空，说明栈尾节点的左子树没了，相当于左子树访问完了，栈尾节点时父节点，出栈
      // curNode 指向右节点， 以它为根节点，继续左访问，然后右访问
      const node = stack.pop()
      console.log(node.element)
      curNode = node.right 
    }
  }
}

{element: 2, 
  left: {element: 3, 
    left: {element: 4}, 
    right : {element: 1, right: {element: 0}}}, 
  right: {element: 1}}

401312

[2, 3, 4] // 4
[2, 3]
[2, 3, 1]

231410

// 后续遍历是要等右孩子节点为空or 右孩子节点已经被访问过了，出栈输出根节点
// lastVisit 什么时候更新，当节点的左右孩子节点都被访问过了，这个节点就可以输出了 lastVisit mark 为 true
// lastVisit 为什么需要有，因为这是一个先由父节点往下访问孩子节点，再往回到父节点，输出父节点的过程
// 若孩子节点下还有节点需要先访问再回退，所以在由父节点访问(push)右孩子节点时，从上到下访问时，lastVisit 为 false 没有访问, 访问右孩子节点()push
// 再由孩子节点下的子树访问完了，栈 pop 回退的时候，如果没有 lastVisit，又将继续访问孩子的父节点从而形成死循环
// 比如访问到 1 -> 0 时，会先访问到 1， while 循环
// curNode 指向访问到的节点，把所有的访问的节点都 push，什么时候 pop
// curNode.left 为 null && curNode.right 不存在 or 已经被访问过了， stack pop
function postOrder(root){
  const stack = new Array()
  if(!root) {
    return
  }
  let lastVisit = curNode = root
  while(stack.length || curNode) {
    // 一直往左节点访问
    while(curNode) {
      stack.push(curNode)
      curNode = curNode.left
    }

    // peekNode 获取的是访问的最后一个左节点，它的左孩子节点为空
    // 若 right 存在并且没有访问过，curNode 指向右孩子节点，继续以它为根节点访问左子树
    const peekNode = stack[stack.length -1];
    if(peekNode.right && lastVisit !== peekNode.right)  {
      curNode = peekNode.right
    }
    // 若 right 不存在 or 已经被访问过，也就是说左孩子节点和右孩子节点已经被访问过了，就可以输出该节点
    else { 
      const node = stack.pop()
      console.log(node.element)
      lastVisit = node  // 标记为已访问
    }
  }
}

{element: 2, 
  left: {element: 3, 
    left: {element: 4}, 
    right : {element: 1, right: {element: 0}}}, 
  right: {element: 1}}



function bfs(root){
  const queue = new Array()
  queue.push(root)
  while(queue.length) {
    const node = queue.shift()
    if(node) {
      console.log(node.element)
      queue.push(node.left)
      queue.push(node.right)
    }
  }
}

var buildTree = function(preorder, inorder) {
  if(!preorder.length) {
    return null
  }
  const root = {val: preorder[0]}
  // 根节点划分左右子树
  const rootIndex = inorder.findIndex(v => v === root.val)
  let curNode = root
  let curRootIndex = rootIndex
  let curIndex = 1
  while(curIndex < preorder.length) {
    const  nodeIndex = inorder.findIndex(v => v === preorder[curIndex])
    // 小于父节点，访问左子树
    if(nodeIndex < curRootIndex) {
      if(curNode.left) {
        curNode = curNode.left
        curRootIndex = inorder.findIndex(v => v === curNode.val)
      } else {
        // 小于当前父节点，插入 left
        curNode.left = {val: preorder[curIndex]}
        curIndex++
        curNode = root
        curRootIndex = rootIndex
      }
    } 
    else {
      if(curNode.right) {
        curNode = curNode.right
        curRootIndex = inorder.findIndex(v => v === curNode.val)
      } else {
         // 大于当前父节点，插入 right
        curNode.right = {val: preorder[curIndex]}
        curIndex++
        curNode = root
        curRootIndex = rootIndex
      }
    }
  }
  return root
};
 function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

var buildTree = function(preorder, inorder) {
  if(!preorder.length) {
    return null
  }
  const root = new TreeNode(preorder[0])
  // 根节点划分左右子树
  let inorderMap = {}
  for(let i = 0; i < inorder.length;i++) {
    inorderMap[inorder[i]] = i 
  }
  const rootIndex = inorderMap[root.val]
  let curNode = root
  let curRootIndex = rootIndex
  let curIndex = 1
  const map = {[preorder[0]]: rootIndex}
  while(curIndex < preorder.length) {
    const  nodeIndex = inorderMap[preorder[curIndex]]
    // 小于父节点，访问左子树
    if(nodeIndex < curRootIndex) {
      if(curNode.left) {
        curNode = curNode.left
        curRootIndex = map[curNode.val]
      } else {
        // 小于当前父节点，插入 left
        curNode.left = new TreeNode(preorder[curIndex])
        map[preorder[curIndex]] = nodeIndex
        curIndex++
        curNode = root
        curRootIndex = rootIndex
      }
    } 
    else {
      if(curNode.right) {
        curNode = curNode.right
        curRootIndex = map[curNode.val]
      } else {
         // 大于当前父节点，插入 right
        curNode.right = new TreeNode(preorder[curIndex])
        map[preorder[curIndex]] = nodeIndex
        curIndex++
        curNode = root
        curRootIndex = rootIndex
      }
    }
  }
  return root
};

var buildTree = function(preorder, inorder) {
  if(!preorder.length) {
    return null
  }
  const root = new TreeNode(preorder[0])
  // 根节点划分左右子树
  const rootIndex = inorder.findIndex(v => v === root.val)
  let curNode = root
  let curRootIndex = rootIndex
  let curIndex = 1
  const map = {[preorder[0]]: rootIndex}
  while(curIndex < preorder.length) {
    const  nodeIndex = inorder.findIndex(v => v === preorder[curIndex])
    // 小于父节点，访问左子树
    if(nodeIndex < curRootIndex) {
      if(curNode.left) {
        curNode = curNode.left
        curRootIndex = map[curNode.val]
      } else {
        // 小于当前父节点，插入 left
        curNode.left = new TreeNode(preorder[curIndex])
        map[preorder[curIndex]] = nodeIndex
        curIndex++
        curNode = curNode.left
        curRootIndex = nodeIndex
      }
    } 
    else {
      if(curNode.right) {
        curNode = curNode.right
        curRootIndex = map[curNode.val]
      } else {
         // 大于当前父节点，插入 right
        curNode.right = new TreeNode(preorder[curIndex])
        map[preorder[curIndex]] = nodeIndex
        curIndex++
        curNode = curNode.right
        curRootIndex = nodeIndex
      }
    }
  }
  return root
};

输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]



{element: 2,               
  left: {element: 3, 
    left: {element: 4,}, 
    right : {element: 5, right: {element: 0}}}, 
  right: {element: 1, left: {element: 10, left: {element: 21},  right: {element: 20}}}}
[2,3,4,5,0,1,10,21,20]  [4,3,5,0,2,21,10,20,1],


 
 var buildTree = function(preorder, inorder) {  
  if (!preorder.length || !inorder.length) {  
  return null;  
  }  
 
  // 构建中序遍历的索引映射, 查找复杂度降为O(1)
  const inorderMap = {};  
  for (let i =0; i < inorder.length; i++) {  
  inorderMap[inorder[i]] = i;  
  }  
 
  //递归构建树 
  const build = (preStart, preEnd, inStart, inEnd) => {  
  if (preStart > preEnd || inStart > inEnd) {  
  return null;  
  }  
 
  // 前序遍历的第一个元素是根节点 
  const rootVal = preorder[preStart];  
  const root = new TreeNode(rootVal);  
  // 通过传递索引来跟踪当前子数组的边界，而不是创建新的数组
  // 找到根节点在中序遍历中的索引 
  const rootIndex = inorderMap[rootVal];  
  const leftSize = rootIndex - inStart; // 左子树的大小 //递归构建左子树和右子树 
  root.left = build(preStart +1, preStart + leftSize, inStart, rootIndex -1);  
  root.right = build(preStart + leftSize +1, preEnd, rootIndex +1, inEnd);  
 
  return root;  
  };  
 
  return build(0, preorder.length -1,0, inorder.length -1);  
 };  
 
 // 示例const preorder = [3,9,20,15,7];  
 const inorder = [9,3,15,20,7];  
 const tree = buildTree(preorder, inorder);

 

 var buildTree = function(preorder, inorder) { 
  if(!preorder.length) {
    return null
  }
  let inorderMap = {}
  for(let i = 0; i < inorder.length;i++) {
    inorderMap[inorder[i]] = i 
  }
  function build(preStart, preEnd, inStart, inEnd) {
    if(preEnd < preStart || inStart > inEnd) {
      return null
    }
    const root = new TreeNode(preorder[preStart])
    const rootInOrderIndex = inorderMap[root.val]
    const leftEnd = rootInOrderIndex - inStart + preStart
    root.left = build(preStart + 1, leftEnd, inStart, rootInOrderIndex - 1)
    root.right = build(leftEnd + 1, preEnd, rootInOrderIndex + 1, inEnd)
    return root
  }
  return build(0, preorder.length - 1, 0, inorder.length - 1)
 }

 var buildTree = function(inorder, postorder) {
  if(!inorder.length){
    return null
  }
  let inorderMap = {}
  for(let i = 0; i < inorder.length;i++) {
    inorderMap[inorder[i]] = i 
  }
  function build(inStart, inEnd, postStart, postEnd) {
    if(inStart > inEnd || postStart > postEnd) {
      return null
    }
    const root = new TreeNode(postorder[postEnd])
    const rootInOrderIndex = inorderMap[root.val]
    const leftChildTreeLength = rootInOrderIndex - inStart
    root.left = build(inStart, rootInOrderIndex - 1, postStart, postStart + leftChildTreeLength - 1)
    // 得把 root 除去
    root.right = build(rootInOrderIndex + 1, inEnd, postStart + leftChildTreeLength, postEnd - 1)
    return root
  }
  return build(0, inorder.length - 1, 0, postorder.length - 1)
 };

 inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]

 var isBalanced = function(root) {
    
 };


 var minDepth = function(root) {
  function min(root) {
    if(!root){
      return 0
    }
    const leftChildTreeDepth= minDepth(root.left)
    const rightChildTreeDepth= minDepth(root.right)
    return Math.min(leftChildTreeDepth, rightChildTreeDepth) +  1
  }
  return min(root)
 };

 var maxDepth = function(root) {
  function max(root) {
    if(!root){
      return 0
    }
    const leftChildTreeDepth= max(root.left)
    const rightChildTreeDepth= max(root.right)
    return Math.max(leftChildTreeDepth, rightChildTreeDepth) +  1
  }
  return max(root)
 };

 var maxDepth = function(root) {
  if(!root) {
    return null
  }
  const queue = new Array()
  queue.push(root)
  let level = 0
  while(queue.length > 0) {
    const length = queue.length
    while(length-- > 0) {
      const node = queue.shift()
      node.left && queue.push(node.left)
      node.right && queue.push(node.right)
    }
    level++
  }
  return level
 }



 // 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
 var isBalanced = function(root) {
  function checkDepth(root) {
    if(!root){
      return {depth: 0, isBalanced: true}
    }
    const checkLeftResult = checkDepth(root.left)
    const checkRightResult = checkDepth(root.right)
    const leftChildTreeDepth = checkLeftResult.depth
    const rightChildTreeDepth = checkRightResult.depth
    return {depth: 1 + Math.max(leftChildTreeDepth,rightChildTreeDepth), isBalanced: 
      checkLeftResult.isBalanced && checkRightResult.isBalanced &&
      Math.abs(leftChildTreeDepth - rightChildTreeDepth) <= 1}
  }
  return checkDepth(root).isBalanced
 };

 const b = {val: 3,               
  left: {val: 9},
  right: {val: 20, left: {val: 15}, right: {val: 7}}}

  const c = {val: 3,               
    children: [{val: 7}, {val: 9, children: [{val: 15}]}]}

  var maxPathSum = function(root) {
    if(!root) {
      return 0
    }
    let maxSum = root.val
    function maxPath(root) {
      if(!root) {
        return 0
      }
      const leftChildMaxPathSum = maxPath(root.left)
      const rightChildMaxPathSum = maxPath(root.right)
      const childTreePathSum = Math.max(root.val, leftChildMaxPathSum + root.val, rightChildMaxPathSum + root.val)
      maxSum = Math.max(maxSum, childTreePathSum, root.val + leftChildMaxPathSum + rightChildMaxPathSum)
      return childTreePathSum
    }
    maxPath(root)
    return maxSum
  };


//  路径和 是路径中各节点值的总和。
// 给你一个二叉树的根节点 root ，返回其 最大路径和 。

var levelOrder = function(root) {
  const result = []
  if(!root) {
    return result
  }
  const queue = new Array()
  queue.push(root)
  while(queue.length > 0) {
    let levelNodesNum = queue.length
    const levelNodes = []
    while(levelNodesNum > 0) {
      const node = queue.shift()
      levelNodesNum--
      levelNodes.push(node.val)
      const children = node.children || []
      queue.push(...children)
    }
    result.push(levelNodes)
  }
  return result
};

var postorder = function(root) {
  const result = []
  if(!root) {
    return []
  }
  function travel(node) {
    if(!node) {
      return
    }
    const children = node.children || []
    for(let i = 0; i < children.length;i++) {
      travel(children[i])
    }
    result.push(node.val)
  }
  travel(root)
  return result
};

console.log('测试代码冲突3')