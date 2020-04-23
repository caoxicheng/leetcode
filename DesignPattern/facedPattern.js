// 外观模式是最常见的设计模式之一，它为子系统中的一组接口提供一个统一的高层接口，
// 使子系统更容易使用。简而言之外观设计模式就是把多个子系统中复杂逻辑进行抽象，
// 从而提供一个更统一、更简洁、更易用的API。很多我们常用的框架和库基本都遵循了外观设计模式，
// 比如JQuery就把复杂的原生DOM操作进行了抽象和封装，并消除了浏览器之间的兼容问题，从而提供了一个更高级更易用的版本。
// 其实在平时工作中我们也会经常用到外观模式进行开发，只是我们不自知而已。

// 比如，我们可以应用外观模式封装一个统一的DOM元素事件绑定/取消方法，用于兼容不同版本的浏览器和更方便的调用：

function addEvent(element, event, handler) {
  if (element.addEventListener) {
    element.addEventListener(event, handler, false)
  } else if (element.attachEvent) {
    element.attachEvent('on' + event, handler)
  } else {
    element['on' + event] = handler
  }
}


function removeEvent(element, event, handler) {
  if (element.removeEventListener) {
    element.removeEventListener(event, handler, false)
  } else if (element.detachEvent) {
    element.attachEvent('on' + event, handler)
  } else {
    element['on' + event] = null
  }
}
