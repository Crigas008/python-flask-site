let currentFramework = null;

function loadFramework(name) {
  if (currentFramework) {
    // Уничтожение предыдущего приложения
    window[currentFramework].unmount();
  }
  
  // Динамическая загрузка скрипта
  const script = document.createElement('script');
  script.src = `/${name}/app.js`;
  document.head.appendChild(script);
  
  script.onload = () => {
    currentFramework = name;
    window[name].mount(document.getElementById('app'));
  };
}

// Загрузка по умолчанию
loadFramework('vue');