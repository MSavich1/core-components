# Change Log

## 9.3.5

### Patch Changes

-   Обновлены зависимости
    -   select@13.2.8

## 9.3.4

### Patch Changes

-   Обновлены зависимости
    -   select@13.2.7
    -   button@7.0.3
    -   input@11.1.4

## 9.3.3

### Patch Changes

-   Обновлены зависимости
    -   select@13.2.6

## 9.3.2

### Patch Changes

-   Обновлены зависимости
    -   input@11.1.3
    -   select@13.2.5

## 9.3.1

### Patch Changes

### [#422](https://github.com/core-ds/core-components/pull/422)

-   "export" типов заменен на "export type"

-   Обновлены зависимости
    -   input@11.1.2
    -   select@13.2.4

## 9.3.0

### Minor Changes

### [#334](https://github.com/core-ds/core-components/pull/334)

-   В компонентах DateRangeInput, DateTimeInput и CalendarInput добавлены mobile и desktop версии компонентов. Название компонентов было изменено по схеме Component → ComponentDesktop
-   В компонентах Calendar и InputAutocomplete добавлена responsive версия компонентов. Название компонентов было изменено по схеме Component → ComponentResponsive<br />
-   В компонентах PickerButton и Tooltip добавлен новый пропс breakpoint. Название компонентов было изменено по схеме Component -→ ComponentResponsive для PickerButton и Component → ComponentDesktop для Tooltip<br />
-   В компонентах Confirmation и SidePanel добавлен новый пропс breakpoint<br />

### Patch Changes

### [#418](https://github.com/core-ds/core-components/pull/418)

-   Исправлена проблема с default-импортом в cjs форматах

-   Обновлены зависимости
    -   button@7.0.2
    -   form-control@9.0.2
    -   input@11.1.1
    -   select@13.2.3

## 9.2.0

### Minor Changes

### [#375](https://github.com/core-ds/core-components/pull/375)

-   Добавлен опциональный prop `multiple` в компонент InputAutocompleteMobile. Теперь есть возможность выбрать несколько значений

### Patch Changes

-   Обновлены зависимости
    -   select@13.2.2

## 9.1.4

### Patch Changes

-   Обновлены зависимости
    -   select@13.2.1

## 9.1.3

### Patch Changes

-   Обновлены зависимости
    -   select@13.2.0

## 9.1.2

### Patch Changes

-   Обновлены зависимости
    -   select@13.1.2

## 9.1.1

### Patch Changes

-   Обновлены зависимости
    -   select@13.1.1

## 9.1.0

### Minor Changes

### [#342](https://github.com/core-ds/core-components/pull/342)

-   В компонентах Gallery и Input иконки подгружаемые с 'alfabank.servicecdn.ru' были заменены на иконки из icons-glyph

### Patch Changes

-   Обновлены зависимости
    -   select@13.1.0
    -   input@11.1.0

## 9.0.3

### Patch Changes

-   Обновлены зависимости
    -   form-control@9.0.1
    -   button@7.0.1
    -   select@13.0.3
    -   input@11.0.2

## 9.0.2

### Patch Changes

-   Обновлены зависимости
    -   select@13.0.2

## 9.0.1

### Patch Changes

### [#320](https://github.com/core-ds/core-components/pull/320)

-   Скрыт нативный спиннер (стрелочки) у компонента Input при type='number'

-   Обновлены зависимости
    -   input@11.0.1
    -   select@13.0.1

## 9.0.0

### Major Changes

### [#286](https://github.com/core-ds/core-components/pull/286)

-   Новые стили инпутов в теме default (все компоненты на основе FormControl, включая Select)
-   Исправлен отступ до hint в SliderInput (уменьшился на 2px)<br />

### Patch Changes

-   Обновлены зависимости
    -   button@7.0.0
    -   input@11.0.0
    -   form-control@9.0.0
    -   select@13.0.0

## 8.2.7

### Patch Changes

-   Обновлены зависимости
    -   input@10.2.5
    -   select@12.4.7

## 8.2.6

### Patch Changes

-   Обновлены зависимости
    -   select@12.4.6

## 8.2.5

### Patch Changes

-   Updated dependencies [[#282](https://github.com/core-ds/core-components/pull/282)]
    -   @alfalab/core-components-button@6.1.2
    -   @alfalab/core-components-form-control@8.3.1
    -   @alfalab/core-components-input@10.2.4
    -   @alfalab/core-components-select@12.4.5

## 8.2.4

### Patch Changes

-   Updated dependencies [[#208](https://github.com/core-ds/core-components/pull/208)]
    -   @alfalab/core-components-input@10.2.3
    -   @alfalab/core-components-select@12.4.4

## 8.2.3

### Patch Changes

-   Updated dependencies [[#189](https://github.com/core-ds/core-components/pull/189)]
    -   @alfalab/core-components-input@10.2.2
    -   @alfalab/core-components-select@12.4.3

## 8.2.2

### Patch Changes

-   @alfalab/core-components-select@12.4.2

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [8.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@8.2.0...@alfalab/core-components-input-autocomplete@8.2.1) (2022-09-13)

### Bug Fixes

-   **base-modal:** fixed scroll to top issues ([#224](https://github.com/core-ds/core-components/issues/224)) ([2e3fdd2](https://github.com/core-ds/core-components/commit/2e3fdd22a4af2b043c428a3ad800b82ac4166d5d))

# [8.2.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@8.1.3...@alfalab/core-components-input-autocomplete@8.2.0) (2022-09-12)

### Bug Fixes

-   **input-autocomplete:** add prop for custom input ([#223](https://github.com/core-ds/core-components/issues/223)) ([632cb7f](https://github.com/core-ds/core-components/commit/632cb7fb572366cd42fad1a8741e99098cce1f12))

### Features

-   **form-control:** new input/select label view (outer) ([#177](https://github.com/core-ds/core-components/issues/177)) ([66beb15](https://github.com/core-ds/core-components/commit/66beb15756de97e17a4d1dd4221fa7f401ee8539))

## [8.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@8.1.2...@alfalab/core-components-input-autocomplete@8.1.3) (2022-09-05)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [8.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@8.1.1...@alfalab/core-components-input-autocomplete@8.1.2) (2022-09-02)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [8.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@8.1.0...@alfalab/core-components-input-autocomplete@8.1.1) (2022-09-02)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

# [8.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@8.0.4...@alfalab/core-components-input-autocomplete@8.1.0) (2022-09-01)

### Features

-   testing-library versions update ([#216](https://github.com/core-ds/core-components/issues/216)) ([33b6225](https://github.com/core-ds/core-components/commit/33b62259a1332f535f367502590ea37e7ad051d4))

## [8.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@8.0.3...@alfalab/core-components-input-autocomplete@8.0.4) (2022-08-31)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [8.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@8.0.2...@alfalab/core-components-input-autocomplete@8.0.3) (2022-08-29)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [8.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@8.0.1...@alfalab/core-components-input-autocomplete@8.0.2) (2022-08-26)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [8.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@8.0.0...@alfalab/core-components-input-autocomplete@8.0.1) (2022-08-19)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

# [8.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.6.1...@alfalab/core-components-input-autocomplete@8.0.0) (2022-08-17)

### Features

-   removed dist directory in published packages ([#200](https://github.com/core-ds/core-components/issues/200)) ([8af8fee](https://github.com/core-ds/core-components/commit/8af8fee53ca0bd19fa2d1ca1422e0df23096e2c8))

### BREAKING CHANGES

-   Изменена директория расположения индексных файлов в опубликованных пакетах (удалена
    директория dist)

Co-authored-by: Vladimir Gevak <VGevak@alfabank.ru>

## [7.6.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.6.0...@alfalab/core-components-input-autocomplete@7.6.1) (2022-08-17)

### Bug Fixes

-   returned dist directory ([#199](https://github.com/core-ds/core-components/issues/199)) ([fabc15e](https://github.com/core-ds/core-components/commit/fabc15effa1457ca65ec7238206f1b1fc2a2a613))

# [7.6.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.5.2...@alfalab/core-components-input-autocomplete@7.6.0) (2022-08-12)

### Features

-   **BottonSheet:** improved bottomSheet component ([#185](https://github.com/core-ds/core-components/issues/185)) ([ba5fa06](https://github.com/core-ds/core-components/commit/ba5fa06d5f342ac5e04adadb72fd21e1f699c00a))

## [7.5.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.5.1...@alfalab/core-components-input-autocomplete@7.5.2) (2022-08-11)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.5.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.5.0...@alfalab/core-components-input-autocomplete@7.5.1) (2022-08-09)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

# [7.5.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.4.9...@alfalab/core-components-input-autocomplete@7.5.0) (2022-08-04)

### Features

-   react 18 support ([#159](https://github.com/core-ds/core-components/issues/159)) ([2e6693c](https://github.com/core-ds/core-components/commit/2e6693c62f534e333aadb7d3fff4ffd78ac84c63))

## [7.4.9](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.4.8...@alfalab/core-components-input-autocomplete@7.4.9) (2022-07-25)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.4.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.4.7...@alfalab/core-components-input-autocomplete@7.4.8) (2022-07-25)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.4.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.4.6...@alfalab/core-components-input-autocomplete@7.4.7) (2022-07-18)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.4.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.4.5...@alfalab/core-components-input-autocomplete@7.4.6) (2022-07-18)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.4.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.4.4...@alfalab/core-components-input-autocomplete@7.4.5) (2022-07-15)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.4.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.4.3...@alfalab/core-components-input-autocomplete@7.4.4) (2022-07-15)

### Bug Fixes

-   bump packages version ([#153](https://github.com/core-ds/core-components/issues/153)) ([fd3e082](https://github.com/core-ds/core-components/commit/fd3e08205672129cdce04e1000c673f2cd9c10da))

## [7.4.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.4.2...@alfalab/core-components-input-autocomplete@7.4.3) (2022-07-14)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.4.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.4.1...@alfalab/core-components-input-autocomplete@7.4.2) (2022-07-14)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.4.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.4.0...@alfalab/core-components-input-autocomplete@7.4.1) (2022-07-11)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

# [7.4.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.3.5...@alfalab/core-components-input-autocomplete@7.4.0) (2022-07-01)

### Features

-   **select:** add select-modal-mobile ([#47](https://github.com/core-ds/core-components/issues/47)) ([5ec4268](https://github.com/core-ds/core-components/commit/5ec42688065bb279d721541ec21bde242675ab8a))

## [7.3.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.3.4...@alfalab/core-components-input-autocomplete@7.3.5) (2022-06-30)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.3.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.3.3...@alfalab/core-components-input-autocomplete@7.3.4) (2022-06-29)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.3.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.3.2...@alfalab/core-components-input-autocomplete@7.3.3) (2022-06-28)

### Bug Fixes

-   **input-autocomplete:** fixed onChange type ([#110](https://github.com/core-ds/core-components/issues/110)) ([c994661](https://github.com/core-ds/core-components/commit/c9946615af9aecb3f1974c887bdd6686708ac18e))

## [7.3.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.3.1...@alfalab/core-components-input-autocomplete@7.3.2) (2022-06-24)

### Bug Fixes

-   **icon-button:** fix disabled colors ([#104](https://github.com/core-ds/core-components/issues/104)) ([3f03849](https://github.com/core-ds/core-components/commit/3f038495bb63f72cd81ceeedbe55b52119581d57))

## [7.3.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.3.0...@alfalab/core-components-input-autocomplete@7.3.1) (2022-06-23)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

# [7.3.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.2.7...@alfalab/core-components-input-autocomplete@7.3.0) (2022-06-20)

### Features

-   **input-autocomplete:** add new component InputAutocompleteMobile ([#96](https://github.com/core-ds/core-components/issues/96)) ([a0e9f95](https://github.com/core-ds/core-components/commit/a0e9f95edbfcd6722e99647d75a262805e81a4a7))

## [7.2.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.2.6...@alfalab/core-components-input-autocomplete@7.2.7) (2022-06-20)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.2.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.2.5...@alfalab/core-components-input-autocomplete@7.2.6) (2022-06-16)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.2.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.2.4...@alfalab/core-components-input-autocomplete@7.2.5) (2022-06-08)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.2.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.2.3...@alfalab/core-components-input-autocomplete@7.2.4) (2022-06-03)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.1.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.1.5...@alfalab/core-components-input-autocomplete@7.1.6) (2022-03-29)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.1.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.1.4...@alfalab/core-components-input-autocomplete@7.1.5) (2022-03-24)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.1.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.1.3...@alfalab/core-components-input-autocomplete@7.1.4) (2022-03-04)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.1.2...@alfalab/core-components-input-autocomplete@7.1.3) (2022-03-04)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.1.1...@alfalab/core-components-input-autocomplete@7.1.2) (2022-03-03)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.1.0...@alfalab/core-components-input-autocomplete@7.1.1) (2022-03-01)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

# [7.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.32...@alfalab/core-components-input-autocomplete@7.1.0) (2022-02-21)

### Features

-   Исправить импорты в сторях. ([#998](https://github.com/core-ds/core-components/issues/998)) ([e6a654a](https://github.com/core-ds/core-components/commit/e6a654a0599451c7d149484cb61d8067eed083b7))

## [7.0.32](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.31...@alfalab/core-components-input-autocomplete@7.0.32) (2022-02-17)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.31](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.30...@alfalab/core-components-input-autocomplete@7.0.31) (2022-02-15)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.30](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.29...@alfalab/core-components-input-autocomplete@7.0.30) (2022-02-09)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.29](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.28...@alfalab/core-components-input-autocomplete@7.0.29) (2022-02-03)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.28](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.27...@alfalab/core-components-input-autocomplete@7.0.28) (2022-02-02)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.27](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.26...@alfalab/core-components-input-autocomplete@7.0.27) (2022-01-27)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.26](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.25...@alfalab/core-components-input-autocomplete@7.0.26) (2021-12-29)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.25](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.24...@alfalab/core-components-input-autocomplete@7.0.25) (2021-12-14)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.24](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.23...@alfalab/core-components-input-autocomplete@7.0.24) (2021-12-08)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.23](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.22...@alfalab/core-components-input-autocomplete@7.0.23) (2021-12-08)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.22](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.21...@alfalab/core-components-input-autocomplete@7.0.22) (2021-12-08)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.21](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.20...@alfalab/core-components-input-autocomplete@7.0.21) (2021-12-01)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.20](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.19...@alfalab/core-components-input-autocomplete@7.0.20) (2021-11-26)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.19](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.18...@alfalab/core-components-input-autocomplete@7.0.19) (2021-11-16)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.18](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.17...@alfalab/core-components-input-autocomplete@7.0.18) (2021-11-08)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.17](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.16...@alfalab/core-components-input-autocomplete@7.0.17) (2021-10-15)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.16](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.15...@alfalab/core-components-input-autocomplete@7.0.16) (2021-10-15)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.15](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.14...@alfalab/core-components-input-autocomplete@7.0.15) (2021-10-11)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.14](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.13...@alfalab/core-components-input-autocomplete@7.0.14) (2021-09-27)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.13](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.12...@alfalab/core-components-input-autocomplete@7.0.13) (2021-09-14)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.12](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.11...@alfalab/core-components-input-autocomplete@7.0.12) (2021-09-08)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.11](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.10...@alfalab/core-components-input-autocomplete@7.0.11) (2021-09-06)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.10](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.9...@alfalab/core-components-input-autocomplete@7.0.10) (2021-08-27)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.9](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.8...@alfalab/core-components-input-autocomplete@7.0.9) (2021-08-23)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.7...@alfalab/core-components-input-autocomplete@7.0.8) (2021-08-23)

### Bug Fixes

-   **input:** smart error icon ([#746](https://github.com/core-ds/core-components/issues/746)) ([f1950d6](https://github.com/core-ds/core-components/commit/f1950d6d516d17d993f0865c10390b6301bb2707)), closes [#782](https://github.com/core-ds/core-components/issues/782)

## [7.0.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.6...@alfalab/core-components-input-autocomplete@7.0.7) (2021-08-13)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.5...@alfalab/core-components-input-autocomplete@7.0.6) (2021-08-11)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.4...@alfalab/core-components-input-autocomplete@7.0.5) (2021-08-04)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.3...@alfalab/core-components-input-autocomplete@7.0.4) (2021-08-03)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.2...@alfalab/core-components-input-autocomplete@7.0.3) (2021-07-23)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.1...@alfalab/core-components-input-autocomplete@7.0.2) (2021-07-19)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [7.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@7.0.0...@alfalab/core-components-input-autocomplete@7.0.1) (2021-07-09)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

# [7.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.1.8...@alfalab/core-components-input-autocomplete@7.0.0) (2021-07-08)

### Features

-   upgrade storybook ([#696](https://github.com/core-ds/core-components/issues/696))

## [6.1.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.1.7...@alfalab/core-components-input-autocomplete@6.1.8) (2021-06-28)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.1.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.1.6...@alfalab/core-components-input-autocomplete@6.1.7) (2021-06-22)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.1.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.1.5...@alfalab/core-components-input-autocomplete@6.1.6) (2021-06-08)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.1.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.1.4...@alfalab/core-components-input-autocomplete@6.1.5) (2021-06-04)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.1.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.1.3...@alfalab/core-components-input-autocomplete@6.1.4) (2021-05-31)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.1.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.1.2...@alfalab/core-components-input-autocomplete@6.1.3) (2021-05-25)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.1.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.1.1...@alfalab/core-components-input-autocomplete@6.1.2) (2021-05-25)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.1.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.1.0...@alfalab/core-components-input-autocomplete@6.1.1) (2021-05-18)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

# [6.1.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.19...@alfalab/core-components-input-autocomplete@6.1.0) (2021-05-07)

### Features

-   **intl-phone-input:** add autocomplete ([#630](https://github.com/core-ds/core-components/issues/630)) ([18b5714](https://github.com/core-ds/core-components/commit/18b57143ede6bf5e9fcd7d460b4859c6d86c026b))

## [6.0.19](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.18...@alfalab/core-components-input-autocomplete@6.0.19) (2021-04-28)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.0.18](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.17...@alfalab/core-components-input-autocomplete@6.0.18) (2021-04-26)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.0.17](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.16...@alfalab/core-components-input-autocomplete@6.0.17) (2021-04-26)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.0.16](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.15...@alfalab/core-components-input-autocomplete@6.0.16) (2021-04-26)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.0.15](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.14...@alfalab/core-components-input-autocomplete@6.0.15) (2021-04-09)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.0.14](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.13...@alfalab/core-components-input-autocomplete@6.0.14) (2021-04-01)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.0.13](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.12...@alfalab/core-components-input-autocomplete@6.0.13) (2021-03-30)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.0.12](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.11...@alfalab/core-components-input-autocomplete@6.0.12) (2021-03-24)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.0.11](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.10...@alfalab/core-components-input-autocomplete@6.0.11) (2021-03-24)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.0.10](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.9...@alfalab/core-components-input-autocomplete@6.0.10) (2021-03-19)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.0.9](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.7...@alfalab/core-components-input-autocomplete@6.0.9) (2021-03-18)

### Bug Fixes

-   one more sborka bug ([#579](https://github.com/core-ds/core-components/issues/579)) ([9fbe0be](https://github.com/core-ds/core-components/commit/9fbe0beca56ec5971de78b3f6cda25305b260efc))

## [6.0.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.5...@alfalab/core-components-input-autocomplete@6.0.7) (2021-03-16)

### Bug Fixes

-   border-radius in packages ([781749e](https://github.com/core-ds/core-components/commit/781749ef38aefd5a6707ac56d2e297dce9f3e073))

## [6.0.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.4...@alfalab/core-components-input-autocomplete@6.0.5) (2021-03-15)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.0.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.3...@alfalab/core-components-input-autocomplete@6.0.4) (2021-03-14)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.0.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.2...@alfalab/core-components-input-autocomplete@6.0.3) (2021-03-11)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.0.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.1...@alfalab/core-components-input-autocomplete@6.0.2) (2021-03-10)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [6.0.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@6.0.0...@alfalab/core-components-input-autocomplete@6.0.1) (2021-03-05)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

# [6.0.0](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@5.2.9...@alfalab/core-components-input-autocomplete@6.0.0) (2021-03-04)

### Features

-   **input-autocomplete:** changed size L (72 → 64), added size XL (72) ([858359a](https://github.com/core-ds/core-components/commit/858359a0dab558113fe1d225d839eb97acd5c917))

### BREAKING CHANGES

-   **input-autocomplete:** size L changed to size XL

## [5.2.9](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@5.2.8...@alfalab/core-components-input-autocomplete@5.2.9) (2021-03-03)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [5.2.8](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@5.2.7...@alfalab/core-components-input-autocomplete@5.2.8) (2021-03-03)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [5.2.7](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@5.2.6...@alfalab/core-components-input-autocomplete@5.2.7) (2021-03-03)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [5.2.6](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@5.2.5...@alfalab/core-components-input-autocomplete@5.2.6) (2021-02-20)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [5.2.5](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@5.2.4...@alfalab/core-components-input-autocomplete@5.2.5) (2021-02-20)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [5.2.4](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@5.2.3...@alfalab/core-components-input-autocomplete@5.2.4) (2021-02-19)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [5.2.3](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@5.2.2...@alfalab/core-components-input-autocomplete@5.2.3) (2021-02-19)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [5.2.2](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@5.2.1...@alfalab/core-components-input-autocomplete@5.2.2) (2021-02-18)

**Note:** Version bump only for package @alfalab/core-components-input-autocomplete

## [5.2.1](https://github.com/core-ds/core-components/compare/@alfalab/core-components-input-autocomplete@5.2.0...@alfalab/core-components-input-autocomplete@5.2.1) (2021-02-18)

### Bug Fixes

-   update versions ([#525](https://github.com/core-ds/core-components/issues/525)) ([31b2e4c](https://github.com/core-ds/core-components/commit/31b2e4c92fde6e2b63a3391a4e053cd328e93e70))
