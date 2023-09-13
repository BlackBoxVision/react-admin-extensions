import { TranslationMessages } from "ra-core";

const spanishMessages: Required<TranslationMessages> = {
  ra: {
    action: {
      add_filter: "Añadir filtro",
      add: "Añadir",
      back: "Ir atrás",
      bulk_actions: "1 item seleccionado |||| %{smart_count} items seleccionados",
      cancel: "Cancelar",
      clear_array_input: "Limpiar la lista",
      clear_input_value: "Limpiar valor",
      clone: "Clonar",
      confirm: "Confirmar",
      create: "Crear",
      create_item: "Crear %{item}",
      delete: "Eliminar",
      edit: "Editar",
      export: "Exportar",
      list: "Listar",
      refresh: "Refrescar",
      remove_filter: "Borrar filtro",
      remove_all_filters: "Remover todos los filtros",
      remove: "Borrar",
      save: "Guardar",
      search: "Buscar",
      select_all: "Seleccionar todo",
      select_row: "Seleccionar esta fila",
      show: "Mostrar",
      sort: "Ordenar",
      undo: "Deshacer",
      unselect: "Deseleccionar",
      expand: "Expandir",
      close: "Cerrar",
      open_menu: "Abrir menú",
      close_menu: "Cerrar menú",
      update: "Actualizar",
      move_up: "Mover arriba",
      move_down: "Mover abajo",
      open:"Abrir",
      toggle_theme: "Alternar tema",
      select_columns: "Columnas",
      update_application: 'Recargar Aplicación',
    },
    boolean: {
      true: "Sí",
      false: "No",
      null: " ",
    },
    page: {
      create: "Crear %{name}",
      dashboard: "Tablero",
      edit: "%{name} #%{id}",
      error: "Algo salió mal",
      list: "Lista de %{name}",
      loading: "Cargando",
      not_found: "No encontrado",
      show: "%{name} #%{id}",
      empty: "Sin %{name} todavía.",
      invite: "¿Quiere agregar una?",
    },
    input: {
      file: {
        upload_several:
          "Arrastre algunos archivos para subir o haga clic para seleccionarlos.",
        upload_single: "Arrastre un archivo para subir o haga clic para seleccionarlo.",
      },
      image: {
        upload_several:
          "Arrastre algunas imagénes para subir o haga clic para seleccionarlas.",
        upload_single:
          "Arrastre alguna imagen para subir o haga clic para seleccionarla.",
      },
      references: {
        all_missing: "No se pueden encontrar datos de referencias.",
        many_missing:
          "Al menos una de las referencias asociadas parece no estar disponible.",
        single_missing: "La referencia asociada no parece estar disponible.",
      },
      password: {
        toggle_visible: "Ocultar contraseña",
        toggle_hidden: "Mostrar contraseña",
      },
    },
    message: {
      about: "Acerca de",
      are_you_sure: "¿Está seguro?",
      auth_error:
        "Ocurrió un error al validar el token de autenticación.",
      bulk_delete_content:
        "¿Seguro que quiere eliminar este %{name}? |||| ¿Seguro que quiere eliminar estos %{smart_count} items?",
      bulk_delete_title:
        "Eliminar %{name} |||| Eliminar %{smart_count} %{name} items",
      bulk_update_content:
        "¿Seguro que quiere actualizar este %{name}? |||| ¿Seguro que quiere actualizar estos %{smart_count} items?",
      bulk_update_title:
        "Actualizar %{name} |||| Actualizar %{smart_count} %{name} items",
      clear_array_input: "¿Estás seguro de que quieres borrar toda la lista?",
      delete_content: "¿Seguro que quiere eliminar este item?",
      delete_title: "Eliminar %{name} #%{id}",
      details: "Detalles",
      error:
        "Se produjo un error en el cliente y su solicitud no se pudo completar",
      invalid_form:
        "El formulario no es válido. Por favor verifique si hay errores",
      loading: "La página se está cargando, espere un momento por favor",
      no: "No",
      not_found:
        "O bien escribió una URL incorrecta o siguió un enlace incorrecto.",
      yes: "Sí",
      unsaved_changes:
        "Algunos de sus cambios no se guardaron. ¿Está seguro que quiere ignorarlos?",
    },
    navigation: {
      no_results: "No se han encontrado resultados",
      no_more_results:
        "El número de página %{page} está fuera de los límites. Pruebe la página anterior.",
      page_out_of_boundaries: "Número de página %{page} fuera de los límites",
      page_out_from_end: "No puede ir después de la última página",
      page_out_from_begin: "No puede ir antes de la página 1",
      page_range_info: "%{offsetBegin} - %{offsetEnd} de %{total}",
      partial_page_range_info: "%{offsetBegin}-%{offsetEnd} de mas de %{offsetEnd}",
      current_page: "Página %{page}",
      page: "Ir a la página %{page}",
      first : "Ir a la primera página",
      last: "Ir a la última página",
      next: "Siguiente",
      previous: "Ir a la página anterior",
      page_rows_per_page: "Filas por página:",
      skip_nav: "Saltar al contenido",
    },
    sort: {
      sort_by: "Ordenar por %{field} %{order}",
      ASC: "ascendente",
      DESC: "descendente",
    },
    auth: {
      auth_check_error: "Por favor inicie sesión para continuar",
      user_menu: "Perfil",
      username: "Usuario",
      password: "Contraseña",
      sign_in: "Acceder",
      sign_in_error: "La autenticación falló, por favor, vuelva a intentarlo",
      logout: "Cerrar Sesión",
    },
    notification: {
      updated: "Elemento actualizado |||| %{smart_count} elementos actualizados",
      created: "Elemento creado",
      deleted: "Elemento borrado |||| %{smart_count} elementos borrados.",
      bad_item: "Elemento incorrecto",
      item_doesnt_exist: "El elemento no existe",
      http_error: "Error de comunicación con el servidor",
      data_provider_error:
        "Error del proveedor de datos. Consulte la consola para más detalles.",
      i18n_error:
        "No se pudieron cargar las traducciones para el idioma especificado",
      canceled: "Acción cancelada",
      logged_out: "Su sesión ha finalizado, vuelva a conectarse.",
      not_authorized: "No tiene autorización para acceder a este recurso.",
      application_update_available: 'Una nueva versión está disponible.',
    },
    validation: {
      required: "Requerido",
      minLength: "Debe contener %{min} caracteres al menos",
      maxLength: "Debe contener %{max} caracteres o menos",
      minValue: "Debe ser al menos %{min}",
      maxValue: "Debe ser %{max} o menos",
      number: "Debe ser un número",
      email: "Debe ser un correo electrónico válido",
      oneOf: "Debe ser uno de: %{options}",
      regex: "Debe coincidir con un formato específico (regexp): %{pattern}",
    },
    saved_queries:{
      label: "Consultas guardadas",
      query_name: "Nombre de la consulta",
      new_label: "Guardar la consulta actual...",
      new_dialog_title: "Guardar la consulta actual como",
      remove_label: "Eliminar la consulta guardada",
      remove_label_with_name: "Eliminar la consulta '%{name}'",
      remove_dialog_title: "¿Eliminar la consulta guardada?",
      remove_message: "¿Estás seguro de que quieres eliminar ese elemento de tu lista de consultas guardadas?",
      help: "Filtrar la lista y guardar esta consulta para más tarde",
    },
    configurable:{
      customize: "Personalizar",
      configureMode: "Configurar esta página",
      inspector:{
        title: "Inspector",
        content: "Pase el ratón por los elementos de la interfaz de usuario de la aplicación para configurarlos",
        reset: "Restablecer la configuración",
        hideAll: "Esconder Todos",
        showAll: "Mostrar Todos",
      },
      Datagrid: {
        title: "Table Datos",
        unlabeled: "Columna #%{column} sin etiqueta",
      },
      SimpleForm: {
        title: "Formulario",
        unlabeled: "Entrada #%{input} sin etiqueta",
      },
      SimpleList:{
        title: "Lista",
        primaryText: "Texto principal",
        secondaryText: "Texto secundario",
        tertiaryText: "Texto terciario"
      },
    },
  },
};

export default spanishMessages;
