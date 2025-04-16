// Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
use tauri::{AppHandle, Manager};

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  let mut builder = tauri::Builder::default();
  #[cfg(desktop)]
  {
      builder = builder.plugin(tauri_plugin_single_instance::init(|app, _args, _cwd| {
          let _ = app.get_webview_window("main")
                    .expect("no main window")
                    .set_focus();
      }));
  }
  builder.plugin(tauri_plugin_opener::init())
        .run(tauri::generate_context!())
        .expect("启动失败");
}
