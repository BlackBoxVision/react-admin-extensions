import { TranslationMessages } from "ra-core";

const spanishMessages: TranslationMessages = {
  ra: {
    action: {
      add: "Añadir",
      add_filter: "Añadir filtro",
      back: "Ir atrás",
      bulk_actions:
        "1 item seleccionado |||| %{smart_count} items seleccionados",
      cancel: "Cancelar",
      clear_input_value: "Limpiar valor",
      clone: "Clonar",
      close: "Cerrar",
      close_menu: "Cerrar menú",
      confirm: "Confirmar",
      create: "Crear",
      create_item: 'Crear %{item}',
      delete: "Eliminar",
      edit: "Editar",
      expand: "Expandir",
      export: "Exportar",
      list: "Listar",
      open_menu: "Abrir menú",
      refresh: "Refrescar",
      remove: "Borrar",
      remove_filter: "Borrar filtro",
      save: "Guardar",
      search: "Buscar",
      show: "Mostrar",
      sort: "Ordenar",
      undo: "Deshacer",
      unselect: "Deseleccionar",
    },
    auth: {
      auth_check_error: "Por favor inicie sesión para continuar",
      logout: "Cerrar Sesión",
      password: "Contraseña",
      sign_in: "Acceder",
      sign_in_error: "La autenticación falló, por favor, vuelva a intentarlo",
      user_menu: "Perfil",
      username: "Usuario",
    },
    boolean: {
      true: "Sí",
      false: "No",
      null: " ",
    },
    input: {
      file: {
        upload_several:
          "Arrastre algunos archivos para subir o haga clic para seleccionarlos.",
        upload_single:
          "Arrastre un archivo para subir o haga clic para seleccionarlo.",
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
      bulk_delete_content:
        "¿Seguro que quiere eliminar este %{name}? |||| ¿Seguro que quiere eliminar estos %{smart_count} items?",
      bulk_delete_title:
        "Eliminar %{name} |||| Eliminar %{smart_count} %{name} items",
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
      next: "Siguiente",
      no_more_results:
        "El número de página %{page} está fuera de los límites. Pruebe la página anterior.",
      no_results: "No se han encontrado resultados",
      page_out_from_begin: "No puede ir antes de la página 1",
      page_out_from_end: "No puede ir después de la última página",
      page_out_of_boundaries: "Número de página %{page} fuera de los límites",
      page_range_info: "%{offsetBegin} - %{offsetEnd} de %{total}",
      page_rows_per_page: "Filas por página:",
      prev: "Anterior",
      skip_nav: "Saltar al contenido",
    },
    sort: {
      sort_by: "Ordenar por %{field} %{order}",
      ASC: "ascendente",
      DESC: "descendente",
    },
    notification: {
      bad_item: "Elemento incorrecto",
      canceled: "Acción cancelada",
      created: "Elemento creado",
      data_provider_error:
        "Error del proveedor de datos. Consulte la consola para más detalles.",
      deleted: "Elemento borrado |||| %{smart_count} elementos borrados.",
      http_error: "Error de comunicación con el servidor",
      item_doesnt_exist: "El elemento no existe",
      logged_out: "Su sesión ha finalizado, vuelva a conectarse.",
      updated:
        "Elemento actualizado |||| %{smart_count} elementos actualizados",
      i18n_error:
        "No se pudieron cargar las traducciones para el idioma especificado",
    },
    page: {
      create: "Crear %{name}",
      dashboard: "Tablero",
      edit: "%{name} #%{id}",
      empty: "Sin %{name} todavía.",
      error: "Algo salió mal",
      invite: "¿Quiere agregar una?",
      list: "Lista de %{name}",
      loading: "Cargando",
      not_found: "No encontrado",
      show: "%{name} #%{id}",
    },
    validation: {
      email: "Debe ser un correo electrónico válido",
      maxLength: "Debe contener %{max} caracteres o menos",
      maxValue: "Debe ser %{max} o menos",
      minLength: "Debe contener %{min} caracteres al menos",
      minValue: "Debe ser al menos %{min}",
      number: "Debe ser un número",
      oneOf: "Debe ser uno de: %{options}",
      regex: "Debe coincidir con un formato específico (regexp): %{pattern}",
      required: "Requerido",
    },
  },
};

export default spanishMessages;
