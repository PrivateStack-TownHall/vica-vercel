$folders = @(
   "src/app/programs/[id]",
   "src/app/lessons/[id]",
   "src/app/settings",

   "src/components/layouts",
   "src/components/navigation",
   "src/components/shared",

   "src/features/home",

   "src/features/programs/api",
   "src/features/programs/hooks",
   "src/features/programs/components",
   "src/features/programs/types",

   "src/features/lessons/api",
   "src/features/lessons/hooks",
   "src/features/lessons/components",

   "src/features/resources/api",
   "src/features/resources/hooks",
   "src/features/resources/components",

   "src/features/assignments/api",
   "src/features/assignments/hooks",
   "src/features/assignments/components",

   "src/services",
   "src/providers",
   "src/lib",
   "src/types",
   "src/constants",
   "src/utils"
)

foreach ($folder in $folders) {
   New-Item -ItemType Directory -Path $folder -Force | Out-Null
}

$files = @(
   "src/app/page.tsx",
   "src/app/programs/page.tsx",
   "src/app/programs/[id]/page.tsx",
   "src/app/lessons/[id]/page.tsx",
   "src/app/settings/page.tsx",
   "src/app/loading.tsx",
   "src/app/not-found.tsx",

   "src/components/layouts/MainLayout.tsx",

   "src/components/navigation/Sidebar.tsx",
   "src/components/navigation/Topbar.tsx",
   "src/components/navigation/MobileMenu.tsx",

   "src/components/shared/Logo.tsx",
   "src/components/shared/PageHeader.tsx",
   "src/components/shared/EmptyState.tsx",
   "src/components/shared/ErrorState.tsx",
   "src/components/shared/LoadingState.tsx",

   "src/features/programs/api/getPrograms.ts",
   "src/features/programs/api/getProgramById.ts",
   "src/features/programs/hooks/usePrograms.ts",
   "src/features/programs/hooks/useProgram.ts",
   "src/features/programs/components/ProgramCard.tsx",
   "src/features/programs/components/ProgramGrid.tsx",
   "src/features/programs/components/ProgramDetail.tsx",
   "src/features/programs/types/program.type.ts",

   "src/features/lessons/api/getLessonById.ts",
   "src/features/lessons/api/getLessonsByModule.ts",
   "src/features/lessons/hooks/useLesson.ts",
   "src/features/lessons/components/LessonContent.tsx",

   "src/features/resources/api/getResourcesByModule.ts",
   "src/features/resources/hooks/useResources.ts",
   "src/features/resources/components/ResourceList.tsx",

   "src/features/assignments/api/getAssignmentsByModule.ts",
   "src/features/assignments/hooks/useAssignments.ts",
   "src/features/assignments/components/AssignmentList.tsx",

   "src/services/api.ts",
   "src/services/program.service.ts",
   "src/services/module.service.ts",
   "src/services/lesson.service.ts",
   "src/services/resource.service.ts",
   "src/services/assignment.service.ts",

   "src/providers/QueryProvider.tsx",
   "src/providers/AppProvider.tsx",

   "src/lib/axios.ts",
   "src/lib/query-client.ts",
   "src/lib/utils.ts",

   "src/types/program.type.ts",
   "src/types/module.type.ts",
   "src/types/lesson.type.ts",
   "src/types/resource.type.ts",
   "src/types/assignment.type.ts",

   "src/constants/routes.ts",
   "src/constants/menu.ts",
   "src/constants/app.ts",

   "src/utils/cn.ts",
   "src/utils/formatDate.ts",
   "src/utils/generateSlug.ts"
)

foreach ($file in $files) {
   if (!(Test-Path $file)) {
      New-Item -ItemType File -Path $file -Force | Out-Null
   }
}

Write-Host "VICA structure created successfully!"