// src/services/github.service.ts

import axios from "@/lib/axios";

console.log("========== ENV ==========");

console.log(
  "OWNER:",
  process.env.NEXT_PUBLIC_GITHUB_OWNER,
);

console.log(
  "REPO:",
  process.env.NEXT_PUBLIC_GITHUB_REPO,
);

console.log(
  "BRANCH:",
  process.env.NEXT_PUBLIC_GITHUB_BRANCH,
);

const GITHUB_OWNER =
  process.env.NEXT_PUBLIC_GITHUB_OWNER!;

const GITHUB_REPO =
  process.env.NEXT_PUBLIC_GITHUB_REPO!;

const GITHUB_BRANCH =
  process.env.NEXT_PUBLIC_GITHUB_BRANCH ||
  "main";

console.log("========== GITHUB CONST ==========");

console.log({
  GITHUB_OWNER,
  GITHUB_REPO,
  GITHUB_BRANCH,
});
const BASE_URL = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents`;

class GithubService {
  private static async request(
    path = "",
  ) {
    const url = `${BASE_URL}/${path}`;

    // console.log("========== REQUEST ==========");

    // console.log({
    //   path,
    //   url,
    // });


    const response =
      await axios.get(url, {
        params: {
          ref: GITHUB_BRANCH,
        },
        headers: {
          Accept:
            "application/vnd.github+json",
        },
      });

    return response.data;
  }

  static async getPrograms() {
    return this.request();
  }

  static async getModules(
    programName: string,
  ) {
    return this.request(
      encodeURIComponent(
        programName,
      ),
    );
  }

  static async getLessons(
    programName: string,
    moduleName: string,
  ) {
    return this.request(
      `${encodeURIComponent(programName)}/${encodeURIComponent(moduleName)}/lessons`,
    );
  }

  static async getAssignments(
    programName: string,
    moduleName: string,
  ) {
    return this.request(
      `${encodeURIComponent(programName)}/${encodeURIComponent(moduleName)}/assignments`,
    );
  }

  static async getResources(
    programName: string,
    moduleName: string,
  ) {
    return this.request(
      `${encodeURIComponent(programName)}/${encodeURIComponent(moduleName)}/resources`,
    );
  }

  static async getFileInfo(
    path: string,
  ) {
    return this.request(path);
  }

  static async getMarkdown(
    path: string,
  ): Promise<string> {
    const file =
      await this.request(path);

    if (!file.download_url) {
      throw new Error(
        "Markdown file not found",
      );
    }

    const response =
      await fetch(
        file.download_url,
        {
          cache: "no-store",
        },
      );

    return response.text();
  }

  static async getDownloadUrl(
    path: string,
  ): Promise<string> {
    const file =
      await this.request(path);

    return file.download_url;
  }

  static getRawUrl(
    path: string,
  ) {
    return `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}/${path}`;
  }
}

export default GithubService;